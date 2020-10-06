"use strict";
console.log("Welcome to Intro to Objects!");

/*********************************************
*              INTRO TO OBJECTS
******************************************** */

/**
 * Objects are an unordered collection of related data in the form of
 * key:value pairs
 */

// var rubberDuck = {
//     color: "yellow",
//     role: "emotional support",
//     name: "cody"
// };
//
//
// console.log(rubberDuck); //this console.logs the word Object and shows the items within the object


/*********************************************
 *              CREATING NEW OBJECTS
 ******************************************** */

/**
 * Objects can be created in JavaScript through the use of the 'new
 * Object()' constructor, or Object literal notation using curly braces.
 */

/**
 * TODO TOGETHER: Create a new variable (of type Object) and call it 'myPhone'. Use either the constructor or Object literal notation.
 */



// //Object Literal Example: use when you have certain properties in mind already


// var myPhone = {
//     color: "gold",
//     model: "iPhone 7",
//     storage: "35GB",
//     ring: function () {
//         console.log("Ring ring!");
//     },
//     picture: function () {
//         console.log("Take a picture!");
//     }
// };



// //The way you access items in myPhone use dot notation:
//
// console.log(myPhone.color);
//
// console.log(myPhone.model);
//
// console.log(myPhone.storage);
//
// // With dot notation you can also call a method that is in the object assigned to a key
//
// myPhone.ring();
//
// myPhone.picture();



// //Object Instance:
//
// //var myPhone = new Object(); //currently empty in this object
// var myPhone = new Object();
//
//
// //when dealing with an empty object, you can create new properties using dot notation
//
// myPhone.color = "gold";
// myPhone.model = "iPhone 7";
// myPhone.storage = "32GB";
// myPhone.ring = function () {
//     console.log("Ring ring!");
// };
//
// console.log(myPhone);
//
//
// //Use dot notation to assign new properties or access existing values

/**
 * TODO: Create a new Object and call it 'myMac'. use either the constructor or Object literal notation.
 */

// var myMac = {};
//
// console.log(myMac);


/*********************************************
 *              PROPERTIES
 ******************************************** */

/**
 * TO DO TOGETHER: Using dot notation, assign these properties to your phone
 * Object: 'model', 'color', 'storage'. Console log your phone variable to
 * check that the information was stored properly.
 */


// myPhone.name = {
//     firstName: 'Elvira',
//     lastName: 'Valadez'
// };
//
// console.log(myPhone);
// console.log(myPhone.name);
// console.log(myPhone.name.firstName);
//
// myPhone.apps = ["Slack", "Gmail", "Instagram"];
//
// console.log(myPhone.apps[2]); //to reach index 2


//to access all elements in an array do what's below

// myPhone.apps.forEach(function (app) {
//     console.log(app);
// });



/**
 * TO DO: Using dot notation, assign these properties to your Mac
 * Object: 'model', 'size', 'year', Console log the Object to check if the
 * information was stored properly
 */

// myMac.model = "iMac";
//
// myMac.size = "27 inch";
//
// myMac.year = "2020";
//
// console.log(myMac);


/**
 * TO DO TOGETHER: Assign a 'name' property to your phone. This should be of
 * type Object and store properties for the user's 'firstName' and
 * 'lastName'. Use console log to access the user's 'lastName'
 */

/**
 * TO DO: Using dot notation, assign a property called 'folders' that stores
 * an Array representing different folders in your system.
 */

// myMac.folders = ["Documents", "Desktop", "Recent"];



/**
 * TO DO: Assign a 'login' property. This should be an object that stores
 * 'username','fakePassword' and 'email'
 */


// myMac.login = {
//     username: "cody",
//     fakePassword: "duck",
//     email: "cody@codeup.com"
// };
//
// console.log(myMac);

/*********************************************
 *                  METHODS
 ******************************************** */

/**
 * TO DO TOGETHER: We are going to add functionality to our phone Object.
 * Using the dot notation, add a method named 'call' that console logs the
 * message: "Dialing..."
 */


// myPhone.call = function() {
//     console.log("Dialing");
// };
//
// myPhone.call(); //the opening and closing parentheses NEED to be included to work


/**
 * TO DO: Let's add functionality to our Mac Object. Create a method named
 * 'powerOn'. When called, this should display a console message that says
 * "Powering on..."
 */

// myMac.powerOn = function () {
//     console.log("Powering On");
// };

/**
 * TO DO TOGETHER: Let's add one more piece of functionality. Create a
 * method on the phone object that returns a message displaying the user's
 * firstName and lastName. Hint: use the 'this' keyword.
 */


// myPhone.currentUser = function() {
//     console.log("Current user: " + this.name.firstName + " " + this.name.lastName); //the this is referring to the myPhone object. It's good to use this when you don't know the name of the object you are currently in
// };
//
// myPhone.currentUser();

/**
 * TO DO: One last thing. Let's add a 'currentUser' method that displays the
 * Mac user's 'username' and 'password'. Use the 'this' keyword to reference
 * the properties we created earlier.
 */


// myMac.currentUser = function() {
//     console.log("username: " + this.login.username + " " + this.login.email);
// };
//
// myMac.currentUser();

/*********************************************
 *                  NESTED VALUES
 ******************************************** */

/**
 * Because an Object is a collection of data and functionality, very often
 * we will see nested values. This can mean an Array of Objects containing
 * Arrays, Objects containing other Objects and so on.
 *
 * It is important to understand the shape of our data so that we can
 * navigate through it.
 */


/*********************************************
 *                  ARRAYS OF OBJECTS
 ******************************************** */

/**
 * If we have an Array of Objects, we can iterate through it to access each
 * Object element and pull the properties and methods that we need.
 */


var chooseYourFighter = [
    {
        name: {
            firstName: "Spongebob",
            lastName: "Squarepants",
        },
        catchPhrase: function () {
            return "I'm Ready!";
        },
        abilities: ["Karate", "Bubble Blowing", "Jelly Fishing"]
    },
    {
        name: {
            firstName: "Patrick",
            lastName: "Star"
        },
        catchPhrase: function () {
            return "No, this is Patrick";
        },
        abilities: ["Rock hiding", "Secret photo", "Wumbo"]
    },
    {
        name: {
            firstName: "Eugene",
            lastName: "Krabs"
        },
        catchPhrase: function () {
            return "money, money, money";
        },
        abilities: ["Take money", "Hide money", "Tiny violin"]
    },
    {
        name: {
            firstName: "Squidward",
            lastName: "Tentacles"
        },
        catchPhrase: function () {
            return "nasal noise*";
        },
        abilities: ["Bad music", "Nag", "SQUILLIAM"]
    }

    ];

chooseYourFighter.forEach(function (fighter) {
    console.log(fighter.name.firstName + ": " + fighter.catchPhrase());
    console.log("Their abilities: ");

    fighter.abilities.forEach(function(ability) {
        console.log(ability);
    });
    console.log("================");
});