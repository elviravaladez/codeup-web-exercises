"use strict";


//Prompt the user for an odd number between 1 and 50. Use a loop
// and a break statement to continue prompting the user
// if they enter invalid input.

//Use a loop and the continue statement to output all the odd numbers
// between 1 and 50, except for the number the user entered.


//prompt("Type in an odd number between 1 and 50");

for (var i = 0; i < 50; i++) {
    var userNumber = prompt("Type in an odd number between 1 and 50");

    if( 0 >= userNumber > 50 || userNumber % 2 === 0 || null) {
        console.log('Number is less than 0, greater than 50, OR even');
        prompt("Type in an odd number between 1 and 50");
        continue;
    } else {
        console.log('Your number is ' + i );
        alert('Your number is ' + i);
        break;
    }
}

