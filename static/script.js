// This script is used to add a hotkey to run the code in the editor
function RunHotKey() {
    var runBtn = document.getElementById('runBtn');
    if (runBtn) {
        runBtn.click();
    }
}
// Add a hotkey to run the code in the editor
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'Enter') {
        event.preventDefault();
        RunHotKey();
    }
});
// function ToggleTheme() : void {
//     const theme = document.body.getAttribute('data-theme');
//     if (theme === 'light') {
//         document.body.setAttribute('data-theme', 'dark');
//     } else {
//         document.body.setAttribute('data-theme', 'light');
//     }
// }
{
    var themeBtn_1 = document.getElementById('lightModeBtn');
    if (themeBtn_1) {
        themeBtn_1.addEventListener('click', function () {
            var dataTheme = document.documentElement.getAttribute("data-theme");
            if (dataTheme === 'light') {
                document.documentElement.setAttribute("data-theme", "dark");
                themeBtn_1.innerText = 'Light Mode';
            }
            else {
                document.documentElement.setAttribute("data-theme", "light");
                themeBtn_1.innerText = 'Dark Mode';
            }
        });
    }
}
