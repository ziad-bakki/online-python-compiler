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

// function ToggleTheme() : void {
//     const theme = document.body.getAttribute('data-theme');
//     if (theme === 'light') {
//         document.body.setAttribute('data-theme', 'dark');
//     } else {
//         document.body.setAttribute('data-theme', 'light');
//     }
// }
{
    const themeBtn = document.getElementById('lightModeBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const dataTheme = document.documentElement.getAttribute("data-theme");
            if (dataTheme === 'light') {
                document.documentElement.setAttribute("data-theme", "dark");
                themeBtn.innerText = 'Light Mode';
            } else {
                document.documentElement.setAttribute("data-theme", "light");
                themeBtn.innerText = 'Dark Mode';
            }
            });
    }
}