"use strict";
// Notice how we now provide a type for the argument! The return type is
// inferred, we don't need to put it explicitly
function sayHello(name) {
    return `Hello ${name}`;
}
const name = "James";
console.log(sayHello(name));
function convertToString(coords) {
    return `${coords.x}.${coords.y}${coords.z === undefined ? "" : `.${coords.z}`}`;
}
// Prints 1.2
console.log(convertToString({ x: 1, y: 2 }));
// Prints 1.2.3
console.log(convertToString({ x: 1, y: 2, z: 3 }));
function weirdArrayFunction(a) {
    return Array.isArray(a) ? "This is an array" : `In upper case: ${a.toUpperCase()}`;
}
// Prints 'This is an array'
console.log(weirdArrayFunction(["one", "two", "three"]));
// Prints 'In upper case: TEST STRING'
console.log(weirdArrayFunction("test string"));
// Same function as previously using the type
function convertCoordinatesToString(coords) {
    return `${coords.x}.${coords.y}${coords.z === undefined ? "" : `.${coords.z}`}`;
}
// Prints 1.2
console.log(convertCoordinatesToString({ x: 1, y: 2 }));
// Prints 1.2.3
console.log(convertCoordinatesToString({ x: 1, y: 2, z: 3 }));
// Defining a constant of that type
const coords = { x: 5, y: 6 };
// Prints 5.6
console.log(convertCoordinatesToString(coords));
