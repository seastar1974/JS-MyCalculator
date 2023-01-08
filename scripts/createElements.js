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
    element.className = className;

    return element;
}

// Link element
let getNewLinkElement = function createLinkElement(parent, href, textContent) {
    let linkElement = document.createElement("a");
    linkElement.href = href;
    linkElement.textContent = textContent;
    parent.append(linkElement);
}

// Unordered list
let getNewUnorderedList = function createUnorderedList(parent, labelText, itemNames) {
    let olGroup = createAndAddElement(parent, "div", "");
    createAndAddElementClass(olGroup, "link-label", "label", labelText);
    let olList = createAndAddElement(olGroup, "ul", "");

    let nameArray = [...itemNames];
    nameArray.forEach(name => {
        createAndAddElement(olList, "li", name)
    });
}

// Ordered list
let getNewOrderedList = function createOrderedList(parent, labelText, itemNames) {
    let olGroup = createAndAddElement(parent, "div", "");
    createAndAddElementClass(olGroup, "link-label", "label", labelText);
    let olList = createAndAddElement(olGroup, "ol", "");

    let nameArray = [...itemNames];
    nameArray.forEach(name => {
        createAndAddElement(olList, "li", name)
    });
}

// Images
let getNewImage = function createImage(parent, src, alt) {
    let imageItem = createAndAddElement(parent, "img", "");
    imageItem.src = src;
    imageItem.alt = alt;
    parent.append(imageItem);
}

// Input content in box
let getNewBoxContent = function createContentBox(parent, id) {
    let cbName = "contentBox" + id + "A";
    let contentBox1 = getNewElementWithClass(parent, cbName, "div", "content-box", "");
    getNewElement(contentBox1, "label" + id, "lable", "Lable" + id);

    cbName = "contentBox" + id + "B";
    let contentBox2 = getNewElementWithClass(parent, cbName, "div", "content-box", "");
    getNewElement(contentBox2, "textarea" + id, "textarea", "");
}

export { getNewElement, getNewElementWithClass, getNewLinkElement, getNewUnorderedList, getNewOrderedList, getNewImage, getNewBoxContent }