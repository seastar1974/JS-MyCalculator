import * as element from './createElements.js'
import * as calc from './calculationElements.js'

var elementList = [];

// Get body
let body = document.querySelector("body");

// Row 3
let divElement3 = element.getNewElement(body, "content", "div", "");
elementList.push(element.getNewNumberButton(divElement3, 7));
// elementList.push(element.getNewNumberButton(divElement3, 8));
// elementList.push(element.getNewNumberButton(divElement3, 9));
