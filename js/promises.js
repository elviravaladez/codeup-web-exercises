(function () {
    "use strict";
    //Create Your Own Promise

    //1. Write a function named wait that accepts a number as a parameter,
    // and returns a promise that resolves after the passed number of milliseconds.

    function wait(milliseconds) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, milliseconds);
        });
    }

    //.then() method for the above function
    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

})();