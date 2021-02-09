let displayInt1 = 0;
let displayInt2 = 0;
let operator = "";
const display = document.querySelector("#display");

function add (num1, num2) {
    let num3 = parseInt(num1) + parseInt(num2);
    return num3
}

function subtract (num1, num2) {
    let num3 = parseInt(num1) - parseInt(num2);
    return num3
}

function multiply (num1, num2) {
    let num3 = parseInt(num1) * parseInt(num2);
    return num3
}

function divide (num1, num2) {
    let num3 = parseInt(num1) / parseInt(num2);
    return num3
}

function operate (num1, num2, operator) {
    if (operator === "+") {
        return add(num1, num2)
    }
    else if (operator === "-") {
        return subtract(num1, num2)
    }
    else if (operator === "*") {
        return multiply(num1, num2)
    }
    else if (operator === "/") {
        return divide(num1, num2)
    }
    return 0
}

displayInt1 = 17;
displayInt2 = 19;
operator = "-";
let result = operate(displayInt1, displayInt2, operator);
display.innerHTML = result;