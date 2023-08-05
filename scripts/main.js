import * as element from './createElements.js'
import * as calc from './calculationElements.js'

var elementList = [];

// Get body
let body = document.querySelector("body");

// Result box
let divResult = element.getNewElementWithClass(body, "divResult", "div", "result-div", "");
// let resultBox = document.getElementById("divResult");
// resultBox.style = "background-color:rgb(190, 190, 190)";
elementList.push(divResult);
element.getNewElement(divResult, "lableResult", "label", "")

// Row 2
let divElement2 = element.getNewElement(body, "content", "div", "");
elementList.push(calc.getNewFunctionButton(divElement2, "CE", "CE"));
elementList.push(calc.getNewFunctionButton(divElement2, "C","C"));
elementList.push(calc.getNewFunctionButton(divElement2, "EraseLastDigit", "<-"));
elementList.push(calc.getNewFunctionButton(divElement2, "Division", "/"));


// Row 3
let divElement3 = element.getNewElement(body, "content", "div", "");
elementList.push(calc.getNewNumberButton(divElement3, 7));
elementList.push(calc.getNewNumberButton(divElement3, 8));
elementList.push(calc.getNewNumberButton(divElement3, 9));
elementList.push(calc.getNewFunctionButton(divElement3, "Multiply", "x"));

// Row 4
let divElement4 = element.getNewElement(body, "content", "div", "");
elementList.push(calc.getNewNumberButton(divElement4, 4));
elementList.push(calc.getNewNumberButton(divElement4, 5));
elementList.push(calc.getNewNumberButton(divElement4, 6));
elementList.push(calc.getNewFunctionButton(divElement4, "Substraction", "-"));

// Row 5
let divElement5 = element.getNewElement(body, "content", "div", "");
elementList.push(calc.getNewNumberButton(divElement5, 1));
elementList.push(calc.getNewNumberButton(divElement5, 2));
elementList.push(calc.getNewNumberButton(divElement5, 3));
elementList.push(calc.getNewFunctionButton(divElement5, "Add", "+"));

// Row 6
let divElement6 = element.getNewElement(body, "content", "div", "");
elementList.push(calc.getNewFunctionButton(divElement6, ""));
elementList.push(calc.getNewNumberButton(divElement6, 0));
elementList.push(calc.getNewFunctionButton(divElement6, ","));
elementList.push(calc.getNewResultButton(divElement6, "Result", "="));

calc.setEventListeners();
calc.handleButtonCE();

function animateElement(element) {
    return new Promise(async function(resolve) {
        setTimeout(function() {
            element.classList.add("animation-buttonKeyframes");
            resolve();
        }, 0);
    });
}

// Självexekvering
(async function showElements() {
    for (const element of elementList) {
        await animateElement(element);
    }
})();