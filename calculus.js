// Variable que obtendrá el número que aparece en la pantalla de la calculadora la primera vez
let display = document.querySelector(".result")
display.innerText = '0'

let firstOperand
let secondOperand

const digitButtons = document.querySelectorAll('.digit-button')

digitButtons.forEach(function (digitButton) {
    digitButton.addEventListener('click', function(event) {
        if(display.innerText === '0') {
            display.innerText = ''
        }

        display.innerText += event.target.innerText
    })
})

// Funcionalidad "clear" del botón C
const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function () {
    clearCalculator()
})

// Funcionalidad "Add" del botón +

const addButton = document.getElementById('add')

addButton.addEventListener('click', function () {
    firstOperand = parseInt(display.innerText)

    clearDisplay()
})

// Funcionalidad "subtract" del botón -

const subtractButton = document.getElementById("subtract")

function clearDisplay() {
    display.innerText = '0'
}

function clearOperands() {
    firstOperand = null
    secondOperand = null
}

function clearCalculator() {
    clearDisplay()
    clearOperands()
}


// Funcionalidad "Operate" del botón =

const operateButton = document.getElementById('operate')

operateButton.addEventListener('click', function() {
    secondOperand = parseInt(display.innerText)
    display.innerText = firstOperand + secondOperand
})

// Variable que almacenará el primer número de la operación introducido por el usuario
