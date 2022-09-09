
let btn = document.getElementById('btn');
btn.addEventListener('click', addClassFunction);

function addClassFunction () {
    btn.classList.toggle('button_blue');
}