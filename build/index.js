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
// We can assign one to the other, seeing as they
// have the same structure
const variableOne = { a: "A" };
const variableTwo = variableOne;
// Same function as previously using the type
function convertTypeToString(t) {
    return `A value: ${t.a}`;
}
console.log(convertTypeToString({ a: "A" }));
// Here car expects all three fields
const car = { name: "Car", size: "M", numberWheels: 4 };
// Vehicle can needs only two
const vehicle = { name: "Plane", size: "L" };
// This is the syntax for limiting our size variable to only
// one of three values
const size = 'M';
// Here we have a function that only accepts
// our S, M, L arguments
function printSize(size) {
    console.log(size);
}
// Here we create a string with a valid value
const sizeString = 'M';
// Now we try and print the string. Unless we
// assert it is of the correct type the compiler
// will recognise it as a string and throw an error!
printSize(sizeString);
// Here we use the type and declare a function which takes
// in a string and prints it
const exampleFn = a => console.log(a);
// Now we pass to something expecting an argument which is a
// function taking in a string and returning void. It then executes
// the function with the string 'Hello everyone!'
function executeFunction(fn) {
    fn("Hello everyone!");
}
// This prints 'Hello everyone!'. Notice how the structure of the
// ExampleFnType is the same as the method signature, and so this
// is a valid call
executeFunction(exampleFn);
// Here we define a function which can (or can not) take 
// a parameter
function functionOptionalParam(x) {
    if (x) {
        console.log("x is defined");
    }
    else {
        console.log("x is not defined");
    }
}
// Prints 'x is not defined'
functionOptionalParam();
// Prints 'x is defined'
functionOptionalParam(7);
// Here we define a function which can (or can not) take 
// a parameter, but if one isn't supplied we'll use 10
function functionDefaultParam(x = 10) {
    console.log("x + 10 is " + (x + 10));
}
// Prints 'x + 10 is 20'
functionDefaultParam();
// Prints 'x + 10 is 17'
functionDefaultParam(7);
// Now we take in an object of type Coords, but
// use the destructuring syntax to be able to
// directly reference its parts
function sum({ x, y }) {
    console.log("Sum of coords is " + (x + y));
}
// Prints 'Sum of coords is 3'
sum({ x: 1, y: 2 });
// We can initialise a variable of the
// type here
const readOnly = {
    unchangeable: "a",
    changeable: { key: "value one" }
};
// This wouldn't work as it's read only
// readOnly.unchangeable = "b"
// However, this is fine as we're not reassigning
// the type itself
readOnly.changeable.key = "value two";
// Here we can receive a string or number, then
// depending on the type print a different result
function typeGuardFunction(x) {
    typeof x === "string" ? console.log("x is a string!") : console.log("x is a number!");
}
// Prints 'x is a string!'
typeGuardFunction("1");
// Prints 'x is a number!'
typeGuardFunction(1);
