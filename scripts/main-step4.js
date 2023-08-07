import * as element from './createElements.js'
import * as calc from './calculationElements.js'

var elementList = [];

// Get body
let body = document.querySelector("body");

// Row 3
let divElement3 = element.getNewElement(body, "content", "div", "");
elementList.push(element.getNewNumberButton(divElement3, 7));
elementList.push(element.getNewNumberButton(divElement3, 8));
elementList.push(element.getNewNumberButton(divElement3, 9));
elementList.push(element.getNewFunctionButton(divElement3, "Multiply", "x"));

// Row 4
let divElement4 = element.getNewElement(body, "content", "div", "");
elementList.push(element.getNewNumberButton(divElement4, 4));
elementList.push(element.getNewNumberButton(divElement4, 5));
elementList.push(element.getNewNumberButton(divElement4, 6));
elementList.push(element.getNewFunctionButton(divElement4, "Substraction", "-"));

// Row 5
let divElement5 = element.getNewElement(body, "content", "div", "");
elementList.push(element.getNewNumberButton(divElement5, 1));
elementList.push(element.getNewNumberButton(divElement5, 2));
elementList.push(element.getNewNumberButton(divElement5, 3));
elementList.push(element.getNewFunctionButton(divElement5, "Add", "+"));

// Row 6
let divElement6 = element.getNewElement(body, "content", "div", "");
element.getNewButtonHidden(divElement6);
elementList.push(element.getNewNumberButton(divElement6, 0));
element.getNewButtonHidden(divElement6);
elementList.push(element.getNewResultButton(divElement6, "Result", "="));
