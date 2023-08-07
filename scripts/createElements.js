// Creates and adds a div
let getNewElement = function createAndAddElementId(parent, id, elementType, textContent) {
    let element = document.createElement(elementType);
    element.id = id;
    element.textContent = textContent;
    parent.append(element);

    return element;
}

let getNewElementWithClass = function createAndAddElementClassId(parent, id, elementType, className, textContent) {
    let element = getNewElement(parent, id, elementType, textContent);
    element.classList.add(className);

    return element;
}

let getNewButtonElementWithClass = function createAndAddButtonElementClassId(parent, id, elementType, className, textContent) {
    let element = getNewElement(parent, id, elementType, textContent);
    element.classList.add(className);
    element.classList.add("buttonStart");

    return element;
}

let getNewButtonHidden = function createAndAddHiddenButtonId(parent) {
    let element = getNewElement(parent, "hidden", "div", "");
     element.classList.add("buttonHidden");

    return element;
}

export let getNewNumberButton = function createContentBox(parent, buttonNumber) {
    let buttonId = "button" + buttonNumber;
    let buttonTextId = "buttonText" + buttonNumber;
    let element = getNewButtonElementWithClass(parent, buttonId, "div", "number-button", "");
    getNewElementWithClass(element, buttonTextId, "div", "buttonText", buttonNumber);

    setButtonEventListenerMouseDown(element, "buttonNumber-mousedown", "animation-resetNumberButton1", "animation-resetNumberButton2");

    return element;
}

export let getNewFunctionButton = function createContentBox(parent, id, textContent) {
    let buttonId = "button" + id;
    let buttonTextId = "buttonText" + id;
    let element = getNewButtonElementWithClass(parent, buttonId, "div", "function-button", "");
    getNewElementWithClass(element, buttonTextId, "div", "buttonText", textContent);
  
    setButtonEventListenerMouseDown(element, "buttonFunction-mousedown", "buttonFunction-mousedown", "buttonFunction-mousedown");

    return element;
}

export let getNewResultButton = function createContentBox(parent, id, textContent) {
    let buttonId = "button" + id;
    let buttonTextId = "buttonText" + id;
    let element = getNewButtonElementWithClass(parent, buttonId, "div", "result-button", "");
    getNewElementWithClass(element, buttonTextId, "div", "buttonText", textContent);
    
    setButtonEventListenerMouseDown(element, "buttonResult-mousedown", "animation-resetResultButton1", "animation-resetResultButton2");

    return element;
}

export function setButtonEventListenerMouseDown(element, colourClass, fadeClass1, fadeClass2) {
    element.addEventListener("mousedown", function () {
        element.classList.add(colourClass);
    });

    element.addEventListener("mouseup", function () {
        element.addEventListener("animationend", function () {
            element.classList.remove(colourClass);
        });
        switchTwoClasses(element, fadeClass1, fadeClass2);
    });

    element.addEventListener("mouseout", function () {
        element.classList.remove(colourClass);
    });
}

export function switchTwoClasses(element, class1, class2) {
    var addClass;
    var removeClass;

    if (element.classList.contains(class1)) {
        addClass = class2;
        removeClass = class1;
    } else if (element.classList.contains(class2)) {
        addClass = class1;
        removeClass = class2;
    } else {
        addClass = class1;
        removeClass = class2;
    }
    
    if (!element.classList.contains("button")) {
        element.classList.add("button");
        element.classList.remove("buttonStart");
    }

    element.classList.add(addClass);
    element.classList.remove(removeClass);
    return addClass;
}


export { getNewElement, getNewElementWithClass, getNewButtonElementWithClass, getNewButtonHidden }