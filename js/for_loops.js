"use strict";


//2 Create a function named showMultiplicationTable that accepts a number and console.logs
// the multiplication table for that number (just multiply by the numbers 1 through 10)




function showMultiplicationTable() {
    var num = 7;
    for(var i = 1; i <= 10; ++i) {
        console.log(num + "*" + i + "= " + num * i);
    }
}

showMultiplicationTable();




//3 Use a for loop and the code from the previous lessons to generate 10 random
// numbers between 20 and 200 and output to the console whether each number is
// odd or even. For example:




for (var i = 0; i <= 9; i++) {
    var randomNumber= Math.floor((Math.random() * (200 - 20 + 1)) + 20);
    if(i % 2 === 0) {
        console.log(randomNumber + " is even.");
    } else {
        console.log(randomNumber + " is odd.");
    }
}




//4 Create a for loop that uses console.log to create the output shown below.




function numberPyramid() {
    var emptyString = " ";
    for(var i = 1; i <= 9; i++) {

        for (var x = 1; x <= i; x++) {

            emptyString += i + " "; // the empty string sets it up as the next row
        }
        console.log(emptyString);
        emptyString = " ";
    }
}
numberPyramid();





//5 Create a for loop that uses console.log to create the output shown below.



for(var i = 100; i > 0; i--) {
    if(i % 5 === 0) {
        console.log(i);
    }
}