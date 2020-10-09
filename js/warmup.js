"use strict";

console.log("Hello Vivian");
console.log("Hello Sophia");
console.log("Hello Samuel");
console.log("Hello Brance");
console.log("Hello Amber");

function sayHello(name) {
    console.log("Hello " + name);
}

sayHello("Vivian");
sayHello("Sophia");
sayHello("Samuel");
sayHello("Brance");
sayHello("Amber");


//10/8/20 Warmup

function stringToArray(input) {
    return input.split(' ');
}

console.log(stringToArray('Trick or Treat')); // ["Trick", "or", "Treat"]