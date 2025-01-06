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
