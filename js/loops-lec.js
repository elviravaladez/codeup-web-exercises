"use strict";
/*********************************************
 *                   WHILE LOOPS
 *********************************************/
// A while loop will run WHILE a certain condition is true
// while (condition) {
//  code runs.
// }



//TODO TOGETHER: Create a while loop that counts up to 10 (non-inclusive) by 1
// (0, 1, 2...9)

var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

//if you don't include increment on your i++, you will be on an infinite loop


//TODO TOGETHER: Create a while loop that counts down from 20 to 0 (inclusive) by 1
// (20, 19, 18...0)

var i = 0;

while(i >= 0) {
    console.log(i);
    i--;
}

//if you do --i, it will decrement 1 time before the console.log and


//TODO TOGETHER: Create a while loop that counts up to 20 (inclusive) by 2s (0, 2, 4...)
// (0, 2, 4...20)

var i = 0;

while (i <= 20) {
    console.log(i);
    i+=2;
}


//i+=2 short hand operator for addition and reassignment
//if you do i + 2, you never reassigned i and the loop just keeps going
//the incrementation/decrement reassigns i

//TODO: Create a while loop that counts to 100 (inclusive) in increments of ten:
// (10...20...30...)

var i = 0;

while(i <= 100) {
    console.log(i);
    i+=10;
}


//TODO: Create a while loop that counts down from 50 to 1 (inclusive) in increments of 1:
// (50, 49, 48, 47, 46 .... 1)

var i = 50;

while (i >= 1) {
    console.log(i);
    i--;
}

//Create a while loop that asks the user to confirm: "Would you like to exit?"

var myQuestion = confirm("Would you like to exit?");

while(!myQuestion) {
    myQuestion = confirm("Would you like to exit?");
}

//you will see that in while loops, you will make a variable outside of the loop,
//rewrite the variable in the while loop, then ask the question everytime the
//while(!myQuestion) is false


/*********************************************
 *               DO-WHILE LOOPS
 *********************************************/
// A do/while loop will run at least once.

// do {
//  Code to be run.
// } while (condition)


var i = 10;

while (i < 10) {
	console.log('while loop iteration #' + i);
	i++;
}


// TODO TOGETHER: Why doesnt the example above run?

// Answer: Because 10 is not less than 10. i < 10 is never true

// TODO TOGETHER: Refactor the example above using a do-while loop. What behavior do we notice?

// var i = 0; //if var i = 10; the do while loop will run at least once to run console.log(i); i++;

do {
    console.log(i);
    i++;
} while(i < 10);


//The above loop is the same as the first loop in the while loops



//TODO TOGETHER: Create a do-while loop that asks the user to confirm: "Would you like to exit?" What difference do you notice?

do {
    var myOtherQuestion = confirm("Would you like to exit?");
} while(!myOtherQuestion);



//TODO TOGETHER: Create a do-while loop that counts up to 20 (inclusive) by 2s (0, 2, 4...)
// (0, 2, 4...20)

var i = 0;
do {
   console.log(i);
   i+=2;
} while(i <= 20);



//TODO: Create a do-while loop that prompts the user for a color and continues to prompt until the string passed is "blue"

//don't have to put var color BEFORE/OUT OF the loop

do {
    var color = prompt("Type in a color:").toLowerCase();
} while(color !== "blue");
alert("Blue is my favorite color too!");


/*********************************************
 *               FOR LOOPS
 *********************************************/
// For loops: Loops that are designed to run a given number of times.

// for (/*initialization*/; /*condition*/; /*increment*/) {
// 	// body
// }

//CAN ONLY HAVE ONE CONDITION IN A FOR LOOP

//TODO TOGETHER: Explore basic for loop syntax

for (var i = 0; i < 10; i++) {
    console.log('for loop iteration #' + i);
}


// TODO TOGETHER: Write a for loop that loops through numbers 0 - 5 (inclusive);

// for(initialize; condition(when to stop); increment) {
//     //body
// }

for(var i = 0; i <= 5; i++) {
   console.log(i);
}

// TODO TOGETHER: Why are loops beneficial?

//To do things over and over again without repeating yourself (in code)!
//Because we want code to be reusable

// TODO TOGETHER: Console.log each color from the array randomColors

//iteration: going over each item in a list

var randomColors = ["red","orange","yellow","blue","green"]

console.log(randomColors[0]);
console.log(randomColors[1]);
console.log(randomColors[2]);
console.log(randomColors[3]);
console.log(randomColors[4]);


// randomColors.length == 5 | final index == 4
//the syntax is useful is we don't know how many elements are in an Array

for(var index = 0; index < randomColors.length; i++) {
    console.log(randomColors[index]);
}


//same code below
for (var i = 0; i < randomColors.length; i++){
	console.log(randomColors[i]);;
}



// TODO TOGETHER: Using a for loop, log all even numbers 0 - 100;


for(var i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}



// TODO: Using a for loop, log all numbers divisible by 5, from 0 - 100;


for(var i = 0; i <= 100; i++) {
    if(i % 5 === 0) {
        console.log(i);
    }
}




//FizzBuzz challenge is used in job interviews

// TODO: Using a for loop, complete the FizzBuzz challenge:
//  Your program should count up to 100.
//  For numbers divisible by 3, log "Fizz"
//  For numbers divisible by 5, log "Buzz"
//  If divisible by 3 and 5, log "FizzBuzz"
//  All other cases, just log the number.


//check for the least likely(more specific) condition in the if statements first

for(var i = 0; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
    } else if(i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}



/*********************************************
 *              BREAKS & CONTINUES
 *********************************************/
// We can get a loop to stop using break;

var numberToStopAt = 5;

for (var i = 1; i < 100; i++) {

	console.log('Loop counter is: ' + i);

	if (i === numberToStopAt) {
		console.log('We have reached the stopping point: break!');
		// use the break keyword to exit from the while loop
		break;
		// nothing after the break will get processed
		console.log('You will never see this line.');
	}
}


// We can get an iteration to skip using continue;

for (var i = 1; i < 100; i++) {

	if (i % 2 !== 0) {
		// skipping all odd numbers;
        console.log("Skipping an odd number!");
		continue; //forces the loop to go to the next iteration and runs the loop again from that point
        console.log("test"); //you will not see this line
	}
    //console.log("You won't see this if the number is odd");
	console.log('Here is a lovely even number: ' + i);
}


