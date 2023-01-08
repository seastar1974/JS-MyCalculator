import * as element from './createElements.js'
import * as calc from './calculationElements.js'

// Get body
let body = document.querySelector("body");

// Result box
let divResult = element.getNewElementWithClass(body, "divResult", "div", "result-div", "");
let resultBox = document.getElementById("divResult");
resultBox.style = "background-color:rgb(190, 190, 190)";
element.getNewElement(divResult, "lableResult", "label", "");


// Row 2
let divElement2 = element.getNewElement(body, "content", "div", "");
calc.getNewFunctionButton(divElement2, "CE", "CE");
calc.getNewFunctionButton(divElement2, "C","C");
calc.getNewFunctionButton(divElement2, "EraseLastDigit", "<-");
calc.getNewFunctionButton(divElement2, "Division", "/");


// Row 3
let divElement3 = element.getNewElement(body, "content", "div", "");
calc.getNewNumberButton(divElement3, 7);
calc.getNewNumberButton(divElement3, 8);
calc.getNewNumberButton(divElement3, 9);
calc.getNewFunctionButton(divElement3, "Multiply", "X");

// Row 4
let divElement4 = element.getNewElement(body, "content", "div", "");
calc.getNewNumberButton(divElement4, 4);
calc.getNewNumberButton(divElement4, 5);
calc.getNewNumberButton(divElement4, 6);
calc.getNewFunctionButton(divElement4, "Substraction", "-");

// Row 5
let divElement5 = element.getNewElement(body, "content", "div", "");
calc.getNewNumberButton(divElement5, 1);
calc.getNewNumberButton(divElement5, 2);
calc.getNewNumberButton(divElement5, 3);
calc.getNewFunctionButton(divElement5, "Add", "+");

// Row 6
let divElement6 = element.getNewElement(body, "content", "div", "");
calc.getNewFunctionButton(divElement6, "");
calc.getNewNumberButton(divElement6, 0);
calc.getNewFunctionButton(divElement6, ",");
calc.getNewFunctionButton(divElement6, "Result", "=");


calc.setEventListeners();

calc.printNumberCE();