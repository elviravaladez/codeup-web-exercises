"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin

// var isAdmin = true;
// if(isAdmin) {
//     //show admin navbar
// }
//
// //another way to write the if statement as a beginner
// //They are the SAME
//
// if(isAdmin === true) {
//     //show admin navbar
// }


//TODO Together: Send a 20% off coupon if its users birthday

// if(isBirthday) {
//     //send coupon
// }


//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true

// var isRainy = true;
// if(isRainy === true) {
//     alert("It's raining");
// }

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item.
// Assume there are no hidden fees or taxes.

//This is the sad path. Usually the sad path allows for cleaner code

// var itemCost = 25;
// var currentBalance = 50;
//
// // 100 > 50 === true
// if(itemCost > currentBalance) {
//     alert("Sorry you don't have enough money!");
// } else {
//     alert("Yay, you can buy the item!");
// }

//Using it within a function. Mixing a conditional with a function
//Refactoring as a function

// function purchase(itemCost, currentBalance) {
//     if(itemCost > currentBalance) {
//         alert("Sorry you don't have enough money!");
//     } else {
//         alert("Yay, you can buy the item!");
//     }
// }



//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

// var numberOfLives = 3;
//
// if(numberOfLives === 0) {
//     alert("Sorry, game over");
// } else {
//     alert("Woo-hoo! Continue game");
// }


//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

// var weather = "snowing";
//
// if (weather == "snowing") {
//     alert("It's snowing!");
// } else {
//     alert("It's not snowing");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

// var numberInput = 11;
//
// if(numberInput > 10) {
//     alert(true);
// } else {
//     alert(false);
// }


//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.
//add this file to conditionals-lec branch




// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar

// var isAdmin = true;
//
// if(isAdmin) {
//     //show the admin navbar
//     console.log("is admin");
// } else {
//     //show regular navbar
//     console.log("regular user");
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else alert "have a nice day!"

// var isRainy = false;
//
// if(isRainy) {
//     alert("It's raining!");
// } else {
//     alert("Have a nice day!");
// }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// var numberOfLives = 3;
//
// if(numberOfLives === 0) {
//     alert("Sorry, game over");
// } else {
//     alert("Next Level!");
// }


//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

// var weather = "snowing";
//
// if (weather == "snowing") {
//     alert("It's snowing!");
// } else {
//     alert("Check back later for more details!");
// }

//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

// var numberInput = 11;
//
// if(numberInput > 10) {
//     alert(true);
// } else {
//     alert("The number is less than 10");
// }


//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.

// function checkIfGameIsOver(numberOfLives) {
//     if(numberOfLives === 0) {
//         alert("Sorry, game over");
//     } else {
//         alert("Next Level!");
//     }
// }
//
// console.log(checkIfGameIsOver(7));



//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.



// SHOULD WE DELETE STUFF EXAMPLE

// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// //if things are not working always try console.logging to check and see what's going on with your code
// console.log("The confirm value:" + weShouldDeleteStuff);
//
// //ok selection === true, cancel selection === false
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("We are deleting everything...");
// } else {
//     alert("Operation Canceled!");
// }



//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert
// "You may proceed", if they are not, alert "Sorry, you are not able to proceed"



// var age = confirm("Are you 13 years of age or older?");
//
// if(age) {
//     alert("You may proceed");
// } else {
//     alert("Sorry, you are not able to proceed");
// }




// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing",
// alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

// var weather = "sunny";
//
// if(weather === "snowing") {
//     alert("It's snowing!");
// } else if (weather === "raining") {
//     alert("It's raining");
// } else {
//     alert("have a nice day");
// }



//TODO Together: refactor the above statement as a function

// function weatherFunction(weather) {
//     if(weather === "snowing") {
//         alert("It's snowing!");
//     } else if (weather === "raining") {
//         alert("It's raining");
//     } else {
//         alert("have a nice day");
//     }
// }
//
// console.log(weatherFunction("sunny"));




// Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham") {
//     alert("Ham is easy to spell and awesome!");
// } else if(pizzaPreference === "pepperoni") {
//     alert("Yum " + pizzaPreference + " is delicious.")
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input.
// When this function is called, it should return a message informing the user what
// to do when approaching that color light at an intersection.


// function trafficFunction (trafficLightColor) {
//     if (trafficLightColor === "green") {
//         return "Go";
//     } else if (trafficLightColor === "yellow") {
//         return"Slow down";
//     } else if (trafficLightColor === "red") {
//         return "Stop";
//     } else {
//         return "Proceed with caution";
//     }
// }
//
// console.log(trafficFunction("red")); //stop
// console.log(trafficFunction("green")); // go
// console.log(trafficFunction("blinking")); //proceed with caution



// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit,
// else they are. If they are eligible, check age. If they are 15 they are eligible
// for a learners permit, if they are 16 or older and have a permit,
// they are eligible for license, if they are 16 or older and do not have a permit,
// they are not eligble for a license.

// var userAge = 16;
// var hasPermit = true;
// //16 && hasPermit === true ====> eligible for license
//
// if(userAge < 15) {
//     // 14 or younger
//     alert("Sorry, not eligible yet!");
// } else {
//     // 15 or older & eligible
//     //nested statement
//     if (userAge === 15) {
//         alert("You are eligible for a permit!");
//     } else if(userAge >= 16 && hasPermit === true) {
//         //user is greater than or equal to 16 AND they have a permit
//         alert("You can get a license! Yay!");
//     } else if(userAge >= 16 && hasPermit === false) {
//         //user greater than or equal to 16, BUT never had a permit :(
//         alert("You need to have a permit first!")
//     } else {
//         alert("Please call support!");
//     }
// }


//to make code look cleaner in this case you can put the IF/ ELSE IF/ELSE Statement into a function and place the function in
// function checkLicense(userAge){
//     if (userAge === 15) {
//         alert("You are eligible for a permit!");
//     } else if(userAge >= 16 && hasPermit === true) {
//         //user is greater than or equal to 16 AND they have a permit
//         alert("You can get a license! Yay!");
//     } else if(userAge >= 16 && hasPermit === false) {
//         //user greater than or equal to 16, BUT never had a permit :(
//         alert("You need to have a permit first!")
//     } else {
//         alert("Please call support!");
//     }
// }


// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);



//you can assign ternary operator to a variable

//CAUTION: Do not put ternary inside of a ternary

//Ternary ONLY works for IF/ELSE STATEMENT (ONLY WORKS WITH CONDITIONALS-TRUE/FALSE)


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// //the var message is what makes this different for the if/else statements that we previously learned about
// console.log(message);


//TODO: Refactor the following conditional as a ternary


//WRITE YOUR TERNARY STATEMENT HERE!



// =============== SWITCH STATEMENT ================
//TODO Together:

var pizzaPreference = prompt("What kind of pizza do you like?");

switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    case "hamm":
        alert("ham is great");
        break;
    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.


//TODO: Rewrite the intersection function from earlier as a switch statement.
//the trafficLight function


// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

