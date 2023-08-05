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


export { getNewElement, getNewElementWithClass, getNewButtonElementWithClass, getNewButtonHidden }