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
    element.getNewElementWithClass(parent, buttonId, "button", "number-button", textContent);
    let buttonElement = document.getElementById(buttonId);
}

export function printNumber0() {
    printNumber(0);
}

export function printNumber1() {
    printNumber(1);
}

export function printNumber2() {
    printNumber(2);
}

export function printNumber3() {
    printNumber(3);
}

export function printNumber4() {
    printNumber(4);
}

export function printNumber5() {
    printNumber(5);
}

export function printNumber6() {
    printNumber(6);
}

export function printNumber7() {
    printNumber(7);
}

export function printNumber8() {
    printNumber(8);
}

export function printNumber9() {
    printNumber(9);
}

function printNumber(number) {
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

export function handleButtonCE() {
    let labelResult = document.getElementById("lableResult");
    labelResult.textContent = 0;
}

export function handleButtonC() {
    let labelResult = document.getElementById("lableResult");
    labelResult.textContent = 0;
    resultString = 0;
}

export function handleButtonEraseLastDigit() {
    let labelResult = document.getElementById("lableResult");
    let numberString = labelResult.textContent;
    labelResult.textContent = numberString.slice(0, numberString.length - 1);
}

export function addNumbers() {
    calculation();
    addClicked = true;
    clearResultLabel = true;
}

export function substractNumbers() {
    calculation();
    substractClicked = true;
    clearResultLabel = true;
}

export function multiplyNumbers() {
    calculation();
    multiplyClicked = true;
    clearResultLabel = true;
}

export function divideNumbers() {
    calculation();
    divideClicked = true;
    clearResultLabel = true;
}

export function resultClicked() {
    calculation();
    equalClicked = true;
    clearResultLabel = true;
}


export function calculation() {
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
}


export { getNewNumberButton, getNewFunctionButton, printNumber, setEventListeners }