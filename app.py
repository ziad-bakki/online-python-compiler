from flask import Flask, jsonify, render_template, request
import os
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/execute', methods=['POST'])
def execute_code():
    data = request.json
    if not data or 'code' not in data:
        return jsonify({'error': 'Invalid Code'})
    
    code = data['code']
    file_path = os.path.join(os.getcwd(), 'temp_code.py')
    
    try:
        with open(file_path, 'w') as f:
            f.write(code)
            
        result = subprocess.run(['python', file_path], capture_output=True, text=True)
        os.remove(file_path)
        
        if result.returncode == 0:
            return jsonify({'output':result.stdout}), 200
        else:
            return jsonify({'error':result.stderr}), 400
    
    except Exception as e:
        return jsonify({'error':result.str(e)}), 500


        
    



if __name__ == '__main__':
    app.run(debug=True)