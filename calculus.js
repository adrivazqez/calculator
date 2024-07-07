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
    clearDisplay()
})

const addButton = document.getElementById('add')

addButton.addEventListener('click', function () {
    firstOperand = parseInt(display.innerText)

    clearDisplay()
})

function clearDisplay() {
    display.innerText = '0'
}

// Variable que almacenará el primer número de la operación introducido por el usuario
let storage = 0
let secondNumber = 0


const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

// addEventListener para las funciones de operación -- WIP
plusButton.addEventListener("click", function () {
    parseInt(register.innerText);
    storage = register.innerText;

    elementsInRegister.splice(0, elementsInRegister.length)
    register.innerText = "0"

    console.log(storage);
})
