/// <reference path="./domHelpers.ts" />

function add(a: number, b: number): number {
    return a + b;
}

q("#sum").textContent = add(2, 5).toString();