function display(val) {
    document.getElementById('result').value += val
}

function clr() {
    document.getElementById('result').value = ''

}

function calculate() {
    let y = document.getElementById('result').value
    try {
        var res = eval(y)
        if (!isFinite(res)) {
            throw new Error("Division by zero is not possible")
        }
        document.getElementById('result').value = res
    }
    catch (error) {
        document.getElementById('result').value = error.message
    }
    
}

function myfunc(event) {
    if (event.key == '0' || event.key == '1' || event.key == '2' || event.key == '3' ||
        event.key == '4' || event.key == '5' || event.key == '6' || event.key == '7' ||
        event.key == '8' || event.key == '9' || event.key == '.' || event.key == '+' ||
        event.key == '-' || event.key == '/' || event.key == '*') {
        document.getElementById('result').value += event.key
    }
}

// click enter key and it should display the result

var cal = document.querySelector('.container')
cal.onkeyup = function (event) {
    if (event.keyCode == 13) {
        let y = document.getElementById('result').value
        calculate()
    }
}
