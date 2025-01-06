{
    var test_click = document.getElementById('tester');
    if (test_click) {
        test_click.addEventListener('click', function () {
            console.log('clicked');
        });
    }
    else {
        console.log("cant find element ".concat(test_click, "!"));
    }
}
{
    var test_click_1 = document.getElementById('tester');
    if (test_click_1) {
        document.addEventListener('keydown', function (event) {
            if (event.ctrlKey && event.key === 'Enter') {
                event.preventDefault();
                test_click_1.click();
            }
        });
    }
}
