let count = 0
let element = document.getElementById('counter')
let buttons = document.getElementsByTagName('button')
function increase() {
    count++
    element.innerText = count
}

function decrease() {
    count--
    element.innerText = count
}

function reset() {
    count = 0
    element.innerText = "<mark>" + count + "</mark>"
}

function selectTheme(theme) {
    document.body.className = theme
    document.getElementsByTagName('main')[0].className = theme
    for (i = 0; i < buttons.length; i ++) {
        buttons[i].className = theme
    }
}