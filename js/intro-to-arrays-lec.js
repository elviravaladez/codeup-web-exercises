"use strict";
console.log("Welcome to intro to arrays");
/* ***************************************************************
* 							INTRO TO ARRAYS
*************************************************************** */


// An array is a data structure that holds an ordered list of items
// Each slot in a JavaScript array can hold any type of data



/* ***************************************************************
* 					DECLARING AN ARRAY
*************************************************************** */
// We declare an array with square brackets ==> []

// an empty array ==> []

//An array with one element ==> [1]

// An array with 5 elements ==> [1, 2, 3, 4, 5]

// An array with 3 elements all of different types ==> 	["one", 42, [8, 9, 10]]
// Notice that the array above does *not* have 5 elements, rather the last element is itself an array with 3 elements in it

//TODO TOGETHER: Declare an empty array set equal to the variable `pies` - then console.log `pies`

// var pies = [];
// console.log(pies); //this will console.log ---> []


//TODO TOGETHER: Set the following array equal to `pies` - then console.log `pies`
// ["apple", "cherry", "key lime", "huckleberry"];


// pies = ["apple", "cherry", "key lime", "huckleberry"];
// console.log(pies);


// TODO TOGETHER: Set the following array equal to variable called `shapes`. Console.log the variable
//  ['square', 'rectangle', 'circle', 'triangle'];


var shapes = ['square', 'rectangle', 'circle', 'triangle'];
// console.log(shapes);


// TODO: Set the following array equal to a variable called `instructors` - then console.log the variable
//  ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"]


var instructors = ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"];
// console.log(instructors);


// TODO: Set the following array equal to a variable called `daysOfTheWeek` - then console.log the variable
//  ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]


var daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
// console.log(daysOfTheWeek);


// TODO: create an array of favorite foods and set to a variable called `favoriteFoods` - then console.log the variable

var favoriteFoods = ["spaghetti", "soup", "salad", "oatmeal", "waffles", "tacos"];
// console.log(favoriteFoods);




/* ***************************************************************
* 					COUNTING AN ARRAY
*************************************************************** */

//We can also count the length of an array by using the `.length` property

// TODO TOGETHER: Log the length of shapes array

// console.log("The length of shapes is " + shapes.length);


// TODO: console.log the length of the instructors array

// console.log("The length of instructors is " + instructors.length);


// TODO: console.log the length of the daysOfTheWeek array

// console.log("The length of daysOfTheWeeks is " + daysOfTheWeek.length);


// TODO: console.log the length of the favoriteFoods array

// console.log("The length of favoriteFoods is " + favoriteFoods.length);



/* ***************************************************************
* 				ACCESSING ARRAY ELEMENTS
*************************************************************** */
// ** NOTE ** Arrays are zero-indexed, which means the first slot in an array is 0.




// TODO TOGETHER: What do we expect the following to output?

// console.log(shapes[0]); // square
// console.log(shapes[1]); //rectangle
// console.log(shapes[2]); //circle
// console.log(shapes[3]); //triangle
// console.log(shapes[4]); //UNDEFINED! <=== does not exist!

// TODO: console.log each element of the instructors array

// console.log(instructors[0]);
// console.log(instructors[1]);
// console.log(instructors[2]);
// console.log(instructors[3]);
// console.log(instructors[4]);
// console.log(instructors[5]);
// console.log(instructors[6]);
// console.log(instructors[7]);


// TODO: console.log the first three elements of the daysOfTheWeek array

// console.log(daysOfTheWeek[0]);
// console.log(daysOfTheWeek[1]);
// console.log(daysOfTheWeek[2]);
// console.log(daysOfTheWeek[3]);
// console.log(daysOfTheWeek[4]);
// console.log(daysOfTheWeek[5]);
// console.log(daysOfTheWeek[6]);


// TODO: console.log the first three elements of the favoriteFoods array

// console.log(favoriteFoods[0]);
// console.log(favoriteFoods[1]);
// console.log(favoriteFoods[2]);

// TODO: create a function called `returnLastElement` that accepts an array and returns the last element of that array
//We know we have to get the length of the array - 1
//array.length - 1 would return (represents) the last element in the array


//1. create function named returnLastElement
//2. this function accepts an array
//3. get the last item in the array by using the array.length - 1
//4. return the last item


//SOLUTION

// function returnLastElement(array) {
//     console.log(array[array.length - 1]);
//     return array[array.length - 1];
// }
//
// returnLastElement(instructors); // trant
// returnLastElement(daysOfTheWeek); // sunday



/* ***************************************************************
* 					ITERATING ARRAYS
*************************************************************** */
//  TODO TOGETHER: Log each element of the shapes array
// TODO TOGETHER: Using a for loop, iterate through the shapes array and log each shape


// for(var i = 0; i < shapes.length; i++) {
//     console.log("=================="); //can do this as a visual to see when there is a new loop
//     console.log("Current iteration: " + i);
//     console.log(shapes[i]);
//     //shapes[0] - iteration 0
//     //shapes[1] - iteration 1
//     //shapes[2] - iteration 2
//     //shapes[3] - iteration 3
// }

// TODO TOGETHER: Alert "that's my favorite shape!" when your favorite shape is iterated over in the loop.


// for(var i =0; i <shapes.length; i++) {
//     console.log("=========");
//     console.log(i);
//     if(shapes[i] === "triangle") {
//         console.log(i);
//         alert( shapes[i] + "s are my favorite shape!");
//     }
// }



// TODO: What happens if we change var i = 1? or var i = 2;

//the loop starts at index 1
//the loop starts at index 2



// TODO: What are benefits of using loops to iterate?

//the process of iterating is faster. You don't have to type out each index


// TODO: How does the loop know when to stop iterating?

//the loop knows when to stop iterating when it meets the condition set in the loop


// TODO: Using a for loop, iterate through the instructors array and console.log each instructor

// for(var i = 0; i < instructors.length; i++) {
//     console.log("==========");
//     console.log(instructors[i]);
// }


// TODO: Using a for loop, iterate through the daysOfTheWeek array and console.log each day of the week

// for(var i = 0; i < daysOfTheWeek.length; i++) {
//     console.log("==========");
//     console.log(daysOfTheWeek[i]);
// }


// TODO: Using a for loop, iterate through the favoriteFoods array and console.log each favorite food

// for(var i = 0; i < favoriteFoods.length; i++) {
//     console.log("==========");
//     console.log(favoriteFoods[i]);
// }


// TODO: Refactoring the instructor loop, alert "hey, I know <INSTRUCTOR NAME HERE>" if you have had class with that instructor. If you have not had class with that instructor, alert "I haven't had class with <INSTRUCTOR NAME HERE> yet!"

for(var i = 0; i < instructors.length; i++) {
    // console.log("==========");
    // console.log(instructors[i]);
    if(instructors[i] === "sophie" || instructors[i] === "vivian") { //MAKE SURE TO INCLUDE instructors[i] === "vivian" NOT --> || === "vivian"
        console.log("hey, I know " + instructors[i]);
    } else {
        console.log("I haven't had class with " + instructors[i] + " yet!");
    }
}




/* ***************************************************************
* 						FOR EACH ARRAY
*************************************************************** */

/* FOR EACH LOOP
Pros: Simpler syntax
Cons: Can only iterate through ENTIRE array
Use: When you need to iterate through ENTIRE array

*/

/* FOR LOOP
Pros: Variety of options
Cons: More complicated syntax
Use: When you need to iterate PARTIALLY or BACKWARDS through an array

 */


// TODO TOGETHER: Using a for each loop, console.log each shape from the shapes array

// shapes.forEach(function (shape) {
//     console.log("=====");
//     console.log(shape);
// })


//say shapes for each shape, do this

//the for each loop runs through EVERYTHING
//it is HARD to get out of a FOR EACH loop.

// TODO TOGETHER: Using a for each loop, console.log each element from the following array:
// var pies = ["apple", "cherry", "key lime", "huckleberry"];
//
// pies.forEach(function (pie) {
//     console.log(pie);
// })


// TODO: Using a for each loop, iterate through the instructors array and console.log each instructor

instructors.forEach(function(instructor) {
    console.log(instructor);
})



// TODO: Using a for each loop, iterate through the daysOfTheWeek array and console.log each day of the week

daysOfTheWeek.forEach(function (day) {
    console.log(day);
})


// TODO: Using a for each loop, iterate through the favoriteFoods array and console.log each favorite food

favoriteFoods.forEach(function (food) {
    console.log(food);
})