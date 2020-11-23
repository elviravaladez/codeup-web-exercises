(function () {
    "use strict";
    //Create Your Own Promise

    //1. Write a function named wait that accepts a number as a parameter,
    // and returns a promise that resolves after the passed number of milliseconds.

    function wait(milliseconds) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(); //no argument within the () b/c we didn't want to access anything or do anything other than console.log what's down below.
            }, milliseconds);
        });
    }

    //.then() method for the above function
    wait(1000).then(() => console.log('You\'ll see this after 1 second')); //nothing is passed to between the then.() parenthesis, which is why we didn't pass anything to resolve() parenthesis
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

})();