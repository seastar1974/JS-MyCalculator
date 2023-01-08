import * as element from './createElements.js'

export let resultString = 0;
let clearResultLabel = false;

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
        labelResult.textContent = number;
    }
    else {
        labelResult.textContent += number;
    }

    clearResultLabel = false;
}

export function printNumberCE() {
    let labelResult = document.getElementById("lableResult");
    labelResult.textContent = 0;
}

export function printNumberC() {
    let labelResult = document.getElementById("lableResult");
    labelResult.textContent = 0;
    resultString = 0;
}

export function addNumbers() {
    let labelResult = document.getElementById("lableResult");
    let newNumber = parseInt(labelResult.textContent);
    let resultStringAsInt = parseInt(resultString);

    resultString = newNumber + resultStringAsInt;
    
    labelResult.textContent = resultString;
    clearResultLabel = true;
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

    document.getElementById("buttonCE").addEventListener("click", printNumberCE);
    document.getElementById("buttonC").addEventListener("click", printNumberC);
    document.getElementById("buttonAdd").addEventListener("click", addNumbers);

    document.getElementById("buttonResult").addEventListener("click", addNumbers);
}


export { getNewNumberButton, getNewFunctionButton, printNumber, setEventListeners }