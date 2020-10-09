"use strict";
//MATH METHODS//

let inputArray = inputString.split("");

//Display each string in the array
inputArray.forEach(function (element, index) {
    console.log("[" + index + "] " + element);
});

//Math.random()

//let randomNum = Math.random(); //this Math.random() always gives you a random number between 0 and 1 NOT including 1
// let randomNum = Math.random() * 10; //if you multiply by 10 it will show between 0 and 10 NOT including 10

//let randomNum = Math.random() * 100; //if you multiply by 100 it will show between 0 and 100 NOT including 100


let randomNum = Math.random() * 2; //if you multiply by 2 it will show between 0 and 2 NOT including 2
console.log(randomNum);





//Math.round()

//Can use Math.round() to output random string within an array. It will randomize the number(referring to the index)

//We can't use a decimal when referring to an array index, so let's round it to the nearest integer

let index = Math.round(randomNum);
console.log("Normal rounding: " + index);


//once we have that integer, let's choose a random string from Trick or Treat array

//CHECK THIS. IT'S NOT WORKING
let randomWord = stringToArray[index];
console.log("Rounding down: " + randomWord);




//Math.floor()
index = Math.floor(randomNum);