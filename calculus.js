// Variable que obtendrá el número que aparece en la pantalla de la calculadora la primera vez
let register = document.querySelector(".result")
let elementsInRegister = Array.from(register);


const buttonsFourthRow = document.querySelector(".fourth-row");
const buttonsThirdRow = document.querySelector(".third-row");
const buttonsSecondRow = document.querySelector(".second-row");
const zeroButton = document.getElementById("zero");


// addEventListener para los botones que añaden números a la calculadora
buttonsFourthRow.addEventListener("click", function (event){
    elementsInRegister.push(`${event.target.innerText}`)
    register.innerText = elementsInRegister.join("");
})

buttonsThirdRow.addEventListener("click", function (event) {
    elementsInRegister.push(`${event.target.innerText}`)
    register.innerText = elementsInRegister.join("");
})

buttonsSecondRow.addEventListener("click", function(event){
    elementsInRegister.push(`${event.target.innerText}`)
    register.innerText = elementsInRegister.join("");
})

zeroButton.addEventListener("click", function (event){
    elementsInRegister.push(`${event.target.innerText}`)
    register.innerText = elementsInRegister.join("");
})


// Funcionalidad "clear" del botón C
const deleteButton = document.getElementById("C");

deleteButton.addEventListener("click", function () {
    elementsInRegister.splice(0, elementsInRegister.length)
    register.innerText = "0";
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
    parseInt(register.innerText);
    storage = register.innerText;

    elementsInRegister.splice(0, elementsInRegister.length)
    register.innerText = "0"

    console.log(storage);
})









   
