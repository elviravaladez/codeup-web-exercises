"use strict";

console.log("Hello from external JavaScript");

//1. Alert - welcome to my website

alert("Welcome to my Website!");

//2. User prompt for favorite color
var userColor = prompt("What is your favorite color?");
alert("Great, " + userColor + " is my favorite color too!");

//Exercise 3: Complete exercise 3 from the previous lesson,
// but write your code in the external.js file instead of in the console.
//When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
// Use an alert to show the results of each problem.


/*
3.1 Scenario 1: You have rented some movies for your kids: The little mermaid (for 3 days),
Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?
*/

var rentalRate= Number(prompt("How much is the daily movie rental rate?"));

var daysRentedLittleMermaid = Number(prompt("For how many days did you rent The Little Mermaid?"));
var daysRentedBrotherBear = Number(prompt("For how many days did you rent Brother Bear?"));
var daysRentedHercules = Number(prompt("For how many days did you rent Hercules?"));

var totalPrice = ((daysRentedLittleMermaid + daysRentedBrotherBear + daysRentedHercules) * rentalRate);
var customerTotalPrice = alert("You will pay $" + totalPrice.toFixed(2) + ".");

/*
3.2 Scenario 2: Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook,
they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much
will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
*/

var googlePayRate = Number(prompt("What is your Google pay rate?"));
var amazonPayRate = Number(prompt("What is your Amazon pay rate?"));
var facebookPayRate = Number(prompt("What is your Facebook pay rate?"));

var googleHours = Number(prompt("How many hours did you work at Google this week?"));
var amazonHours = Number(prompt("How many hours did you work at Amazon this week?"));
var facebookHours = Number(prompt("How many hours did you work at Facebook this week?"));

var googlePayment= googlePayRate * googleHours;
var amazonPayment = amazonPayRate * amazonHours;
var facebookPayment = facebookPayRate * facebookHours;

var totalPayment = googlePayment + amazonPayment + facebookPayment;

var customerPayment = alert("Your total payment will be $" + totalPayment.toFixed(2) + ".");

/*
3.3 Scenario 3:
A student can be enrolled in a class only if the class is not full and
the class schedule does not conflict with her current schedule.
*/

//if class is full (true) we can enroll
var classNotFull = confirm("Class is not full"); //boolean

//if class schedule does not conflict (true), we can enroll
var noConflictsWithSchedule = confirm("Schedules do not conflict"); //boolean

//true && true = student can enroll
//true && false = student cannot enroll b/c of schedule conflict
//false && true = student cannot enroll b/c class is full
//false && false = student cannot enroll b/c class is full & there is a schedule conflict
var enrollInClass = classNotFull && noConflictsWithSchedule;

alert("Student enrolled: " + enrollInClass);