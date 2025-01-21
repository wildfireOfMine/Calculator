let firstNumber = "";
let operator = "";
let secondNumber = "";

const screen = document.querySelector("#screen");

const clearButton = document.querySelector("#clear");
const firstHalfButton = document.querySelector("#firstHalf");
const secondHalfButton = document.querySelector("#secondHalf");
const modButton = document.querySelector("#mod");

const sevenButton = document.querySelector("#seven");
const eightButton = document.querySelector("#eight");
const nineButton = document.querySelector("#nine");
const dividesButton = document.querySelector("#divides");

const fourButton = document.querySelector("#four");
const fiveButton = document.querySelector("#five");
const sixButton = document.querySelector("#six");
const multipliesButton = document.querySelector("#multiplies");

const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const lessButton = document.querySelector("#less");

const zeroButton = document.querySelector("#zero");
const commaButton = document.querySelector("#comma");
const sumsButton = document.querySelector("#sums");
const equalsButton = document.querySelector("#equals");

clearButton.addEventListener("click", e=>{
    screen.value = "";
});

/* Numbers */

sevenButton.addEventListener("click", e=>{
    screen.value += "7";
    if (secondNumber === "" && operator === "") {
        firstNumber = parseInt(screen.value);
    } else if (firstNumber != ""){
        console.log((screen.value).substring(1));
        secondNumber = parseInt((screen.value).substring(1));
    }
});

eightButton.addEventListener("click", e=>{
    screen.value += "8";
    if (secondNumber === "") {
        firstNumber = parseInt(screen.value);
    } else if (firstNumber != ""){
        secondNumber = parseInt(screen.value);
    }
});

nineButton.addEventListener("click", e=>{
    screen.value += "9";
    if (secondNumber === "") {
        firstNumber = parseInt(screen.value);
    } else if (firstNumber != ""){
        secondNumber = parseInt(screen.value);
    }
});

fourButton.addEventListener("click", e=>{
    screen.value += "4";
    if (secondNumber === "") {
        firstNumber = parseInt(screen.value);
    } else if (firstNumber != ""){
        secondNumber = parseInt(screen.value);
    }
});

fiveButton.addEventListener("click", e=>{
    screen.value += "5";
    if (secondNumber === "") {
        firstNumber = parseInt(screen.value);
    } else if (firstNumber != ""){
        secondNumber = parseInt(screen.value);
    }
});

sixButton.addEventListener("click", e=>{
    screen.value += "6";
    if (secondNumber === "") {
        firstNumber = parseInt(screen.value);
    } else if (firstNumber != ""){
        secondNumber = parseInt(screen.value);
    }
});

oneButton.addEventListener("click", e=>{
    screen.value += "1";
    if (secondNumber === "") {
        firstNumber = parseInt(screen.value);
    } else if (firstNumber != ""){
        secondNumber = parseInt(screen.value);
    }
});

twoButton.addEventListener("click", e=>{
    screen.value += "2";
    if (secondNumber === "") {
        firstNumber = parseInt(screen.value);
    } else if (firstNumber != ""){
        secondNumber = parseInt(screen.value);
    }
});

threeButton.addEventListener("click", e=>{
    screen.value += "3";
    if (secondNumber === "") {
        firstNumber = parseInt(screen.value);
    } else if (firstNumber != ""){
        secondNumber = parseInt(screen.value);
    }
});

zeroButton.addEventListener("click", e=>{
    screen.value += "0";
    if (secondNumber === "") {
        firstNumber = parseInt(screen.value);
    } else if (firstNumber != ""){
        secondNumber = parseInt(screen.value);
    }
});

/* Operators */

sumsButton.addEventListener("click", e=>{
    screen.value = "+";
    operator = "+";
});

lessButton.addEventListener("click", e=>{
    screen.value = "-";
    operator = "-";
});

multipliesButton.addEventListener("click", e=>{
    screen.value = "*";
    operator = "*";
});

dividesButton.addEventListener("click", e=>{
    screen.value = "/";
    operator = "/";
});

/* Equals */

equalsButton.addEventListener("click", e=>{
    const number = operate(operator, firstNumber, secondNumber);
    console.log(number);
    screen.value = `${number}`;
    firstNumber = number;
    operator = "";
    secondNumber = "";
})


/* Functions */
function add(a, b){
    return a+b;
}

function substract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function operate(operator, a, b){
    var result = 0;
    if (operator === "+") {
        result = add(a, b);
    } else if (operator === "-") {
        result = substract(a, b);
    } else if (operator === "*") {
        result = multiply(a, b);

    } else if (operator === "/") {
        result = divide(a, b);
    }

    return result;
}