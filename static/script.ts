{
const test_click = document.getElementById('tester');

if (test_click) {test_click.addEventListener('click', () => {
    console.log('clicked');
});
}   else {
        console.log(`cant find element ${test_click}!`);
}
}