import * as element from './createElements.js'

export let resultString = 0;
let clearResultLabel = false;
let addClicked = false;
let substractClicked = false;
let multiplyClicked = false;
let divideClicked = false;
let equalClicked = false;

let getNewNumberButton = function createContentBox(parent, buttonNumber) {
    let buttonId = "button" + buttonNumber;
    element.getNewElementWithClass(parent, buttonId, "button", "number-button", buttonNumber);
    let buttonElement = document.getElementById(buttonId);
}

let getNewFunctionButton = function createContentBox(parent, id, textContent) {
    let buttonId = "button" + id;
    element.getNewElementWithClass(parent, buttonId, "button", "function-button", textContent);
    let buttonElement = document.getElementById(buttonId);
}

let getNewResultButton = function createContentBox(parent, id, textContent) {
    let buttonId = "button" + id;
    element.getNewElementWithClass(parent, buttonId, "button", "result-button", textContent);
    let buttonElement = document.getElementById(buttonId);
}

function printNumber0() {
    printNumber(0);
}

function printNumber1() {
    printNumber(1);
}

function printNumber2() {
    printNumber(2);
}

function printNumber3() {
    printNumber(3);
}

function printNumber4() {
    printNumber(4);
}

function printNumber5() {
    printNumber(5);
}

function printNumber6() {
    printNumber(6);
}

function printNumber7() {
    printNumber(7);
}

function printNumber8() {
    printNumber(8);
}

function printNumber9() {
    printNumber(9);
}

export function printNumber(number) {
    let labelResult = document.getElementById("lableResult");

    if (clearResultLabel || (labelResult.textContent == 0)) {
        resultString = labelResult.textContent;
        labelResult.textContent = number;
    }
    else {
        labelResult.textContent += number;
    }

    clearResultLabel = false;
}

function handleButtonCE() {
    let labelResult = document.getElementById("lableResult");
    labelResult.textContent = 0;
}

function handleButtonC() {
    let labelResult = document.getElementById("lableResult");
    labelResult.textContent = 0;
    resultString = 0;
}

function handleButtonEraseLastDigit() {
    let labelResult = document.getElementById("lableResult");
    let numberString = labelResult.textContent;
    labelResult.textContent = numberString.slice(0, numberString.length - 1);
}

function addNumbers() {
    calculation();
    addClicked = true;
    clearResultLabel = true;
}

function substractNumbers() {
    calculation();
    substractClicked = true;
    clearResultLabel = true;
}

function multiplyNumbers() {
    calculation();
    multiplyClicked = true;
    clearResultLabel = true;
}

function divideNumbers() {
    calculation();
    divideClicked = true;
    clearResultLabel = true;
}

function resultClicked() {
    calculation();
    equalClicked = true;
    clearResultLabel = true;
}


function calculation() {
    let labelResult = document.getElementById("lableResult");
    let newNumber = parseInt(labelResult.textContent);
    let resultStringAsInt = parseInt(resultString);

    if (addClicked) {
        resultString = resultStringAsInt + newNumber;
        addClicked = false;
        labelResult.textContent = resultString;
    }
    else if (substractClicked) {
        resultString = resultStringAsInt - newNumber;
        substractClicked = false;
        labelResult.textContent = resultString;
    }
    else if (multiplyClicked) {
        resultString = resultStringAsInt * newNumber;
        multiplyClicked = false;
        labelResult.textContent = resultString;
    }
    else if (divideClicked) {
        resultString = resultStringAsInt / newNumber;
        divideClicked = false;
        labelResult.textContent = resultString;
    }
}

function handleKeyup(event) {
    let key = event.key;

    if (isKeyNumber(key)) {
        printNumber(key);
    }
    else if (key == "+") {
        addNumbers();
    }
    else if (key == "-") {
        substractNumbers();
    }
    else if (key == "*") {
        multiplyNumbers();
    }
    else if (key == "/") {
        divideNumbers();
    }
    else if (key == "Enter") {
        resultClicked();
    }
    else if (key == "Backspace") {
        handleButtonEraseLastDigit();
    }
    else if (key == "Delete") {
        handleButtonCE();
    }

}

function isKeyNumber(key) {
    let result = ["1", "2", "", "4", "5", "6", "7", "8", "9", "0"].includes(key);
    return result;
}

function setEventListeners() {
    document.getElementById("button1").addEventListener("click", printNumber1);
    document.getElementById("button2").addEventListener("click", printNumber2);
    document.getElementById("button3").addEventListener("click", printNumber3);
    document.getElementById("button4").addEventListener("click", printNumber4);
    document.getElementById("button5").addEventListener("click", printNumber5);
    document.getElementById("button6").addEventListener("click", printNumber6);
    document.getElementById("button7").addEventListener("click", printNumber7);
    document.getElementById("button8").addEventListener("click", printNumber8);
    document.getElementById("button9").addEventListener("click", printNumber9);
    document.getElementById("button0").addEventListener("click", printNumber0);

    document.getElementById("buttonCE").addEventListener("click", handleButtonCE);
    document.getElementById("buttonC").addEventListener("click", handleButtonC);
    document.getElementById("buttonEraseLastDigit").addEventListener("click", handleButtonEraseLastDigit);

    document.getElementById("buttonAdd").addEventListener("click", addNumbers);
    document.getElementById("buttonSubstraction").addEventListener("click", substractNumbers);
    document.getElementById("buttonMultiply").addEventListener("click", multiplyNumbers);
    document.getElementById("buttonDivision").addEventListener("click", divideNumbers);
    document.getElementById("buttonDivision").addEventListener("click", divideNumbers);

    document.getElementById("buttonResult").addEventListener("click", resultClicked);

    let body = document.querySelector("body");
    body.addEventListener("keyup", handleKeyup);
}


export { getNewNumberButton, getNewFunctionButton, getNewResultButton, setEventListeners }