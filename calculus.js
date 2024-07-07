// Variable que obtendrá el número que aparece en la pantalla de la calculadora la primera vez
let display = document.querySelector(".result")
let digitsInDisplay = ""


const buttonsFourthRow = document.querySelector(".fourth-row");
const buttonsThirdRow = document.querySelector(".third-row");
const buttonsSecondRow = document.querySelector(".second-row");
const zeroButton = document.getElementById("zero");

const digitButtons = document.querySelectorAll('.digit-button')

for(i = 0; i < digitButtons.length; i++) {
    digitButtons[i].addEventListener('click', function(event) {
        digitsInDisplay += event.target.innerText
        display.innerText = digitsInDisplay;
    })
}

// Funcionalidad "clear" del botón C
const deleteButton = document.getElementById("C");

deleteButton.addEventListener("click", function () {
    digitsInDisplay.splice(0, digitsInDisplay.length)
    display.innerText = "0";
})


// Variable que almacenará el primer número de la operación introducido por el usuario
let storage = 0
let secondNumber = 0


const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

// addEventListener para las funciones de operación -- WIP
plusButton.addEventListener("click", function () {
    parseInt(display.innerText);
    storage = display.innerText;

    digitsInDisplay.splice(0, digitsInDisplay.length)
    display.innerText = "0"

    console.log(storage);
})









   
