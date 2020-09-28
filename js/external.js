"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var userResponse = prompt("What is your favorite color?");
console.log("User's favorite color is: " + userResponse);

alert("Great, " + userResponse + " is my favorite color too!");

//Exercise 3: Complete exercise 3 from the previous lesson,
// but write your code in the external.js file instead of in the console.
//When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.


/*
Scenario 1: You have rented some movies for your kids: The little mermaid (for 3 days),
Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?
*/

var rentalRate= Number(prompt("How much is the daily movie rental rate?"));
console.log("The daily movie rental rate is: $" + rentalRate);

var daysRentedLittleMermaid = Number(prompt("For how many days did you rent The Little Mermaid?"));
console.log("Little Mermaid days: " + daysRentedLittleMermaid);

var daysRentedBrotherBear = Number(prompt("For how many days did you rent Brother Bear?"));
console.log("Brother Bear days: " + daysRentedBrotherBear);

var daysRentedHercules = Number(prompt("For how many days did you rent Hercules?"));
console.log("Hercules days: " + daysRentedHercules);

var totalPrice = ((daysRentedLittleMermaid + daysRentedBrotherBear + daysRentedHercules) * rentalRate);

var customerTotalPrice = alert("You will pay $" + totalPrice + ".");
console.log("Customer will pay $" + totalPrice);

/*
Scenario 2: Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much
will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
*/

