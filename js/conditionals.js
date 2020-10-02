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


function analyzeColor(randomColor) {
    if(randomColor === 'blue') {
        return 'blue is the color of the sky';
    } else if(randomColor === 'red') {
        return 'red is the color of lipstick';
    } else if(randomColor === 'orange') {
        return 'orange is the color of a basketball';
    } else if(randomColor === 'yellow') {
        return 'yellow is the color of a lemon';
    } else if(randomColor === 'green') {
        return 'green is the color of grass';
    } else if(randomColor === 'indigo') {
        return 'indigo is the color of my shirt';
    } else if(randomColor === 'violet') {
        return 'violet is the color of an eggplant';
    } else {
        return 'not one of the colors defined in the rainbow';
    }
}

console.log(analyzeColor('yellow'));
console.log(analyzeColor('purple'));
console.log(analyzeColor('green'));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */


function analyzeColorSwitch(randomColor){
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    switch(randomColor) {
        case 'blue':
            return 'blue is the color of the sky';
            break;
        case 'red':
            return 'red is the color of lipstick';
            break;
        case 'orange':
            return 'orange is the color of a basketball';
            break;
        case 'yellow':
            return 'yellow is the color of a lemon';
            break;
        case 'green':
            return 'green is the color of grass';
            break;
        case 'indigo':
            return 'indigo is the color of my shirt';
            break;
        case 'violet':
            return 'violet is the color of an eggplant';
            break;
        default:
            return 'not one of the colors defined in the rainbow';
            break;
    }
}

console.log(analyzeColorSwitch(randomColor));


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userColor = prompt("Type in your favorite color");
alert(analyzeColor(userColor));


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


function calculateTotal(luckyNum, total){
    var discountedPrice = 0;
    if(luckyNum === 0) {
        return discountedPrice = total;
    } else if(luckyNum === 1) {
        return discountedPrice = (total -(total * .1));
    } else if(luckyNum === 2) {
        return discountedPrice = (total - (total * .25));
    } else if(luckyNum === 3) {
        return discountedPrice = (total - (total * .35));
    } else if(luckyNum === 4) {
        return discountedPrice = total * .5;
    } else if(luckyNum === 5) {
        return 0;
    } else {
        return discountedPrice = total;
    }
}


//refactored code as a switch statement

// function calculateTotal(luckyNum, total) {
//     var discountedRate = 0;

//     switch (luckyNum) {
//         case 0:
//             return discountedRate = 0;
//             break;
//         case 1:
//            return discountedRate = .1;
//             break;
//         case 2:
//             return discountedRate = .25;
//             break;
//         case 3:
//             return discountedRate = .35;
//             break;
//         case 4:
//             return discountedRate = .5;
//             break;
//         case 5:
//             return discountedRate = 1;
//             break;
//     }
//     return total - (total * discountedRate);
// }

//console.log(calculateTotal(0, 100)); //returns 100
//console.log(calculateTotal(4, 100)); //returns 50
//console.log(calculateTotal(5, 100)); //returns 0



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6); //returns 0-5

var initialPrice = Number(prompt("What is your total bill?")).toFixed(2);
var totalDiscountedPrice = calculateTotal(luckyNumber, initialPrice).toFixed(2);

alert("Your lucky number was " + luckyNumber + ". Your price before the discount was $" + initialPrice + ". Your price after the discount is $" + totalDiscountedPrice + "." );

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


// function userNumber() {
//     var confirmNumber = confirm("Do you want to enter a number?");
//     //var promptUserNumber = Number(prompt("Enter a number"));
//
//     if (confirmNumber === true) {
//         var promptUserNumber = Number(prompt("Enter a number"));
//     } else if(isNaN(promptUserNumber)) {
//         alert( promptUserNumber + " is not a number");
//     } else if(promptUserNumber % 2 === 0) {
//         alert(promptUserNumber + " is even");
//     } else if(promptUserNumber % 2 === 1) {
//         alert(promptUserNumber + " is odd");
//     } else if(promptUserNumber > 0) {
//         alert(promptUserNumber + " is positive");
//     } else if(promptUserNumber < 0) {
//         alert(promptUserNumber + " is negative");
//     } else if(promptUserNumber) {
//         alert(promptUserNumber + " + 100 is " + (promptUserNumber + 100));
//     } else if(confirmNumber === 0) {
//         return alert("Got it. You don't want to enter a number.");
//     }
// }
//
// userNumber();


var confirmNumber = confirm("Do you want to enter a number?");

if(confirmNumber) {
    //true path ==> user did want to enter a number

    var promptUserNumber = (prompt("Enter a number"));

    console.log("User entered the following " + promptUserNumber);

    //check to see if user input is a number
    var isNumber = !isNaN(promptUserNumber);

    if(isNumber) {
        var userNumber = Number(promptUserNumber);

        //checking to see if number is even
        var isEven = userNumber % 2 === 0;
        console.log("The user's number is even: " + isEven);

        //Use ternary statement to determine the message, if even, use even message, if odd ,use odd message
        var evenMessage = (isEven) ? "Your number is even!" : "Your number is odd!";
        alert(evenMessage);

        //add and alert 100 to user number

        alert(userNumber + 100);


        //Use ternary statement to determine positive or negative
        var posOrNeg = (userNumber >= 0) ? "Your number is positive" : "Your number is negative";
        alert(posOrNeg);

    } else {
        //sad path ==> not a number
        alert("Not a number");
    }
}