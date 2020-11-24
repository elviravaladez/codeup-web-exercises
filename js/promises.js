(function () {
    "use strict";
    //Create Your Own Promise

    //1. Write a function named wait that accepts a number as a parameter,
    // and returns a promise that resolves after the passed number of milliseconds.


    ////initial function
    // function wait(milliseconds) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(); //no argument within the () b/c we didn't want to access anything or do anything other than console.log what's down below.
    //         }, milliseconds);
    //     });
    // }

    //refactored function
    function wait(milliseconds) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, milliseconds);
        });
    }

    //.then() method for the above function
    wait(1000).then(() => console.log('You\'ll see this after 1 second')); //nothing is passed to between the then.() parenthesis, which is why we didn't pass anything to resolve() parenthesis
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


    //Handle An API Promise

    // We will use the GitHub token so that we don't get rate limited when talking to the GitHub API. You can add the token to your requests like this:


    //Create a function that accepts a GitHub username, and returns a promise that resolves
    // returning just the date of the last commit that user made. Reference the github api documentation to achieve this.


    //INITIAL
    // function getDate(userName) {
    //     fetch(`https://api.github.com/users/${userName}/events`, {headers: {'Authorization': 'token' + githubToken}})
    //         .then(res => res.json())
    //         .then((commit) => {
    //             console.log(`The most recent commit for ${userName} was made on ${commit[0].created_at.slice(0, 10)}.`);
    //         })
    //         .catch(console.error);
    // }
    //
    // getDate('elviravaladez');


    function extractDateOfLastPushEvent(events) {
        for (let event of events) {
            if (event.type === 'PusEvent') {
                return new Date(event.created_at).toDateString();
            }
        }
    }


    function lastPushDate(username) {
        const url = `https://api.github/users/${username}/events`;
        const options = {headers: {'Authorization': 'token' + githubToken}};
        return fetch(url, options)
            .then(res => res.json())
            .then(extractDateOfLastPushEvent)
            .catch(console.error);
    }

    lastPushDate('elviravaladez').then(console.log);

})();