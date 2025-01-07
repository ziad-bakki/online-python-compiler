// This script is used to add a hotkey to run the code in the editor
function RunHotKey() {
    const runBtn = document.getElementById('runBtn');
    if (runBtn) {
        runBtn.click();
    }
}

// Add a hotkey to run the code in the editor
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'Enter') {
        event.preventDefault();
        RunHotKey();
    }
})