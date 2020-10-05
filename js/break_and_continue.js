"use strict";


//Prompt the user for an odd number between 1 and 50. Use a loop
// and a break statement to continue prompting the user
// if they enter invalid input.

//Use a loop and the continue statement to output all the odd numbers
// between 1 and 50, except for the number the user entered.


//prompt("Type in an odd number between 1 and 50");



do {
    var userNumber = Number(prompt("Type in an odd number between 1 and 50"));

    if(userNumber < 1 || userNumber > 50) {
        alert("Number not in range. Try again.");
    } else if(userNumber % 2 === 0) {
        alert("Number not odd. Try again.");
    } else if(isNaN(userNumber)) {
        alert("Not a number. Try again.");
    } else {
        alert("Yay! Number in range!");
        break;
    }
} while (true);

for(var i = 1; i < 51; i++) {

    if(i === 1) {
        console.log("Number to skip is: " + userNumber);
    }

    if(i % 2 === 0) {
        continue;
    }

    if(i === userNumber) {
        console.log("Yikes! Skipping number: " + userNumber);
    } else {
        console.log("Here is an odd number: " + i);
    }
}