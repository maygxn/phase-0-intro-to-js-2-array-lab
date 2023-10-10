// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]; 
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop(name);
}
function destructivelyRemoveFirstCat() {
    cats.shift(name);
}
function appendCat(name) {
    const copyOfCats = [...cats];
    copyOfCats.push(name);
    return copyOfCats;
}
function prependCat(name) {
    const prependCats = [...cats];
    prependCats.unshift(name);
    return prependCats;
}
function removeLastCat() {
    const removeCats = [...cats];
    removeCats.pop();
    return removeCats;
}
function removeFirstCat() {
    const minusCats = [...cats];
    minusCats.shift();
    return minusCats;
}