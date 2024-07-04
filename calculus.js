// Creo la variable que obtendrá el número que aparece en la pantalla de la calculadora
let register = document.querySelector(".result")
let elementsInRegister = Array.from(register);

console.log(register.innertext);

const buttonsFourthRow = document.querySelector(".fourth-row");
const buttonsThirdRow = document.querySelector(".third-row");
const buttonsSecondRow = document.querySelector(".second-row");



// addEventListener para los botones que añaden números a la calculadora

buttonsFourthRow.addEventListener("click", function (event){
    elementsInRegister.push(`${event.target.innerText}`)
    register.innerText = elementsInRegister.join("");
})

buttonsThirdRow.addEventListener("click", function (event) {
    console.log(`You clicked on button number ${event.target.innerText}`)
})

buttonsSecondRow.addEventListener("click", function(event){
    console.log(`You clicked on button number ${event.target.innerText}`)
})

console.log(elementsInRegister)






















   
