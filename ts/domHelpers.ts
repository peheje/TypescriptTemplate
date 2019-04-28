function q(query: string): Element {
    return document.querySelector(query);
}

function qa(query: string): NodeListOf<Element> {
    return document.querySelectorAll(query);
}