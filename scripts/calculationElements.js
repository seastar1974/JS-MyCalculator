import * as ce from './createElements.js'

export let resultString = 0;
let clearResultLabel = false;
let addClicked = false;
let substractClicked = false;
let multiplyClicked = false;
let divideClicked = false;
let equalClicked = false;


export function printNumber(number) {
    let labelResult = document.getElementById("lableResult");

    if (clearResultLabel) {
        resultString = labelResult.textContent;
        labelResult.textContent = number;
    }
    else if (labelResult.textContent == 0) {
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
    resultString = 0;
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

function handleKeyDown(event) {
    let key = event.key;
    let element;

    if (isKeyNumber(key)) {
        element = document.getElementById("button" + key);
    }
    else if (key == "+") {
        element = document.getElementById("buttonAdd");
    }
    else if (key == "-") {
        element = document.getElementById("buttonSubstraction");
    }
    else if (key == "*") {
        element = document.getElementById("buttonMultiply");
    }
    else if (key == "/") {
        element = document.getElementById("buttonDivision");
    }
    else if (key == "Enter") {
        element = document.getElementById("buttonResult");
    }
    else if (key == "Backspace") {
        element = document.getElementById("buttonEraseLastDigit");
    }
    else if (key == "Delete") {
        element = document.getElementById("buttonCE");
    }

    if (element != null) {
        element.dispatchEvent(new Event('mousedown'));
    }
}

function handleKeyup(event) {
    let key = event.key;
    let element;

    if (isKeyNumber(key)) {
        printNumber(key);
        element = document.getElementById("button"+key);
    }
    else if (key == "+") {
        addNumbers();
        element = document.getElementById("buttonAdd");
    }
    else if (key == "-") {
        substractNumbers();
        element = document.getElementById("buttonSubstraction");
    }
    else if (key == "*") {
        multiplyNumbers();
        element = document.getElementById("buttonMultiply");
    }
    else if (key == "/") {
        divideNumbers();
        element = document.getElementById("buttonDivision");
    }
    else if (key == "Enter") {
        resultClicked();
        element = document.getElementById("buttonResult");
    }
    else if (key == "Backspace") {
        handleButtonEraseLastDigit();
        element = document.getElementById("buttonEraseLastDigit");
    }
    else if (key == "Delete") {
        handleButtonCE();
        element = document.getElementById("buttonCE");
    }

    if (element != null) {
        element.dispatchEvent(new Event('mouseup'));
    }
}

function isKeyNumber(key) {
    let result = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(key);
    return result;
}

export function     setEventListeners() {
    document.getElementById("button1").addEventListener ("click", function() { printNumber(1); } );
    document.getElementById("button2").addEventListener("click", function() { printNumber(2); } );
    document.getElementById("button3").addEventListener("click", function() { printNumber(3); } );
    document.getElementById("button4").addEventListener("click", function() { printNumber(4); } );
    document.getElementById("button5").addEventListener("click", function() { printNumber(5); } );
    document.getElementById("button6").addEventListener("click", function() { printNumber(6); } );
    document.getElementById("button7").addEventListener("click", function() { printNumber(7); } );
    document.getElementById("button8").addEventListener("click", function() { printNumber(8); } );
    document.getElementById("button9").addEventListener("click", function() { printNumber(9); } );
    document.getElementById("button0").addEventListener("click", function() { printNumber(0); } );

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
    body.addEventListener("keydown", handleKeyDown);
    body.addEventListener("keyup", handleKeyup);
}


