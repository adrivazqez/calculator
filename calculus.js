// Variable que obtendrá el número que aparece en la pantalla de la calculadora la primera vez
let display = document.querySelector(".result")
display.innerText = '0'

let buffer = null
let lastOperatorClicked = null

const digitButtons = document.querySelectorAll('.digit-button')

digitButtons.forEach(function (digitButton) {
    digitButton.addEventListener('click', function(event) {
        if(display.innerText === '0') {
            display.innerText = ''
        }

        display.innerText += event.target.innerText
    })
})

// Registro de última operación que debe aplicarse al último número insertado por el usuario
const operationButtons = document.querySelectorAll(".operation-button")

operationButtons.forEach(function (operationButton){
    operationButton.addEventListener("click", function(event) {
        lastOperatorClicked = event.target.innerText
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
    if (buffer === null) {
        buffer += parseInt(display.innerText)
    } else {
        buffer += parseInt(display.innerText)
    }
    clearDisplay()
})

// Funcionalidad "subtract" del botón -

const subtractButton = document.getElementById("subtract")

subtractButton.addEventListener("click", function () { 
    if (buffer === null) {
        buffer = parseInt(display.innerText)
    } else {
        buffer -= parseInt(display.innerText)
    }
    clearDisplay ()
})

// Funcionalidad "multiply" del botón x

const multiplyButton = document.getElementById("multiply")

multiplyButton.addEventListener("click", function () {
    if (buffer === null) {
        buffer = parseInt(display.innerText)
    } else {
    buffer *= parseInt(display.innerText)
    } 
    clearDisplay ()   
})

//Funcionalidad "divide" del botón ÷
const divideButton = document.getElementById("divide")

divideButton.addEventListener("click", function () {
    if (buffer === null) {
        buffer = parseInt(display.innerText)
    } else {
        buffer /= parseInt(display.innerText)
    }
    clearDisplay ()
})
// funcionalidad "erase" del botón arrow
const eraseButton = document.getElementById("erase")

eraseButton.addEventListener("click", function () {
    erase ()
})


//Funciones usadas en los botones
function clearDisplay() {
    display.innerText = '0'
}

function clearBuffer() {
    buffer = null
}

function clearCalculator() {
    clearDisplay()
    clearBuffer()
}

function erase () {
    if (display.innerText.length === 1){
        display.innerText = "0"
    }else {
        display.innerText = display.innerText.slice(0,-1)}

}
// Funcionalidad "Operate" del botón =

const operateButton = document.getElementById('operate')

operateButton.addEventListener('click', function() {
        if (lastOperatorClicked === "+") {
            buffer += parseInt(display.innerText)
            display.innerText = buffer
            clearBuffer ()
        } else if (lastOperatorClicked === "-") {
            buffer -= parseInt(display.innerText)
            display.innerText = buffer
            clearBuffer ()
        } else if (lastOperatorClicked === "x") {
            buffer *= parseInt(display.innerText)
            display.innerText = buffer
            clearBuffer ()
        } else if (lastOperatorClicked === "÷") {
            buffer /= parseInt(display.innerText)
            display.innerText = buffer
            clearBuffer ()
        }
})

