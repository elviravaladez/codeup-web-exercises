"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)



// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];


// function analyzeColor(randomColor) {
//     if(randomColor === 'blue') {
//         return 'blue is the color of the sky';
//     } else if(randomColor === 'red') {
//         return 'red is the color of lipstick';
//     } else if(randomColor === 'orange') {
//         return 'orange is the color of a basketball';
//     } else if(randomColor === 'yellow') {
//         return 'yellow is the color of a lemon';
//     } else if(randomColor === 'green') {
//         return 'green is the color of grass';
//     } else if(randomColor === 'indigo') {
//         return 'indigo is the color of my shirt';
//     } else if(randomColor === 'violet') {
//         return 'violet is the color of an eggplant';
//     } else {
//         return 'not one of the colors defined in the rainbow';
//     }
// }
//
// console.log(analyzeColor('yellow'));
// console.log(analyzeColor('purple'));
// console.log(analyzeColor('green'));


/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */


// function analyzeColor(randomColor){
//     var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//     var randomColor = colors[Math.floor(Math.random() * colors.length)];
//     switch(randomColor) {
//         case 'blue':
//             return 'blue is the color of the sky';
//             break;
//         case 'red':
//             return 'red is the color of lipstick';
//             break;
//         case 'orange':
//             return 'orange is the color of a basketball';
//             break;
//         case 'yellow':
//             return 'yellow is the color of a lemon';
//             break;
//         case 'green':
//             return 'green is the color of grass';
//             break;
//         case 'indigo':
//             return 'indigo is the color of my shirt';
//             break;
//         case 'violet':
//             return 'violet is the color of an eggplant';
//             break;
//         default:
//             return 'not one of the colors defined in the rainbow';
//             break;
//     }
// }

//console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var userColor = prompt("Type in your favorite color");
// alert(analyzeColor(userColor));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// var luckyNumber = 2;
// var total = 100;

function calculateTotal(luckyNumber, total){
    if(luckyNumber === 0) {
        return total;
    } else if(luckyNumber === 1) {
        return (total -(total * .1));
    } else if(luckyNumber === 2) {
        return (total - (total * .25));
    } else if(luckyNumber === 3) {
        return (total - (total * .35));
    } else if(luckyNumber === 4) {
        return total * .5;
    } else if(luckyNumber === 5) {
        return 0;
    } else {
        return "Sorry, your number was not part of the promotion.";
    }
}

//calculateTotal(luckyNumber, total);


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var initialPrice = Number(prompt("What is your total bill?")).toFixed(2);
var discountedPrice = calculateTotal(luckyNumber, initialPrice).toFixed(2);

alert("Your lucky number was " + luckyNumber + ". Your price before the discount was $" + initialPrice + ". Your price after the discount is $" + discountedPrice + "." );

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */


var confirmNumber = confirm("Would you like to enter a number?");
var promptUserNumber = Number(prompt("Enter a number:"));

function userNumber(confirmNumber) {
    if (confirmNumber === true) {
        return promptUserNumber;
    } else if(promptUserNumber === NaN) {
        alert( promptUserNumber + " is not a number");
    } else if(promptUserNumber % 2 === 0) {
        alert(promptUserNumber + " is even");
    } else if(promptUserNumber % 2 === 1) {
        alert(promptUserNumber + " is odd");
    } else if(promptUserNumber > 0) {
        alert(promptUserNumber + " is positive");
    } else if(promptUserNumber < 0) {
        alert(promptUserNumber + " is negative");
    } else if(promptUserNumber) {
        alert(promptUserNumber + " + 100 is " (promptUserNumber + 100));
    } else {
        alert("Got it. You don't want to enter a number.");
    }
}

userNumber(confirmNumber);