let memory = "";
let operator = "";
let activeDisplay = "";
let operationCounter = 0; //counts the total number of operations performed, reset when equals button clicked

const display = document.querySelector("#display");
const displayButtons = document.querySelectorAll(".displaybutton");
const operatorButtons = document.querySelectorAll(".operatorbutton");
const equalsButton = document.querySelector("#equals");
const ACButton = document.querySelector("#ac");
const clearButton = document.querySelector("#c");
const plusMinusButton = document.querySelector("#plus-minus");

function add (num1, num2) {
    let num3 = num1 + num2;
    return num3
}

function subtract (num1, num2) {
    let num3 = num1 - num2;
    return num3
}

function multiply (num1, num2) {
    let num3 = num1 * num2;
    return num3
}

function divide (num1, num2) {
    let num3 = num1 / num2;
    return num3
}

//operates based on 
function operate (num1, num2, operator) {   
    let number1 = +num1;
    let number2 = +num2;
    let output = 0;
    if (operator === "+") {
        let result = add(number1, number2);
        output = result;
    }
    else if (operator === "-") {
        let result = subtract(number1, number2);
        output = result;
    }
    else if (operator === "*") {
        let result = multiply(number1, number2);
        output = result;
    }
    else if (operator === "/") {
        if (number2 === 0) {
            display.innerHTML = "Absolutely not!";
            return
        }
        let result = divide(number1, number2);
        output = result;
    }
    operationCounter = 0;
    output = +output.toFixed(6);
    return output
}

// adding event listeners to concat numbers to activeDisplay
for (i = 0; i < displayButtons.length; i++) {
    const activeButton = displayButtons[i];
    activeButton.addEventListener('click', () => {
        activeDisplay = activeDisplay.concat(activeButton.id);
        display.innerHTML = activeDisplay;
    });
}

// adding event listeners to operators - if the first operation then just add to memory, if not operate before adding to memory
for (i = 0; i < operatorButtons.length; i++) {
    const activeButton = operatorButtons[i];
    activeButton.addEventListener('click', () => {
        operator = activeButton.id;
        if (operationCounter === 0) {
            memory = activeDisplay;
            operationCounter ++;
        }
        else {
            memory = operate(memory, activeDisplay, operator);
            display.innerHTML = memory;
            operationCounter ++;
        }
        activeDisplay = "";
    });
}

//adding all clear button functionality
ACButton.addEventListener('click', () => {
    memory = "";
    activeDisplay = "";
    operator = "";
    display.innerHTML = "0";
    console.log("All cleared.");
});

//adding clear button functionality
clearButton.addEventListener ('click', () => {
    activeDisplay = "";
    display.innerHTML = "0";
    console.log("Screen cleared.")
});

//adding +/- button functionality
plusMinusButton.addEventListener('click', () => {
    if (activeDisplay[0] === "-") {
        activeDisplay = activeDisplay.substring(1);
    }
    else if (activeDisplay[0] != "-") {
        activeDisplay = "-" + activeDisplay;
    }
    return display.innerHTML = activeDisplay
});

//evaluates screen and memory
equalsButton.addEventListener('click', () => {
    console.log(memory);
    console.log(activeDisplay);
    console.log(operator);
    console.log(operationCounter);
    let finalOutput = operate(memory, activeDisplay, operator);
    display.innerHTML = finalOutput;
});

//divide functionality is buggy, investigate further...