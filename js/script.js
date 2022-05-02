


const result = document.getElementById('result');
const clear = document.getElementById('clear')


function display(val) {
    result.value +=val;
    return val;
}

function  clearScreen() {
    result.value=''
}

function solve() {
    let x = result.value;

    let y = eval(x);
    result.value = y;

    return y;

}