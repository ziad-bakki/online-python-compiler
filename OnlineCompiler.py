from flask import Flask, jsonify, render_template_string, request


app = Flask(__name__)

HTML = """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Python Compiler</title>
    <style> 
        body {
            font-family: Arial, sans-serif;
            margine: 20px;
        }
        h1 {
            font-size: 24px;
            margin-bottom: 20px;
        }
        #editor {
            width: 100%;
            height: 300px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
            line-height: 1.5;
        }
        button {
            font-size: 16px;
            padding: 10px 20px;
            margin-top: 10px;
            cursor: pointer;
            border: none;
            border-radius: 4px;
            background-color: #007bff;
            color: white;
        }
        button:hover {
            background-color: #0056b3;
        }
        pre {
            font-size: 14px;
            background-color: #282c34;
            color: #abb2bf;
            padding: 15px;
            border: 1px solid #444;
            border-radius: 4px;
            white-space: pre-wrap;
            word-wrap: break-word;
            overflow: auto;
        }
    
    </style>


</head>
<body>
    <h1> Python Online Compiler </h1>
    <div id="editor"></div>
    <button onclick="runCode()">Run</button>
    <pre id="output"></pre>
    
</body>
</html>
"""


@app.route('/')
def index():
    return render_template_string(HTML)


@app.route('/execute', methods=['POST'])
def execute_code():
    data = request.json
    if not data or 'code' not in data:
        return jsonify({'error': 'Invalid data'})
    



if __name__ == '__main__':
    app.run(debug=True)