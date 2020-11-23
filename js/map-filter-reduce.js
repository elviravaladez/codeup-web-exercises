(function(){
    "use strict";

    //Exercise 1: Copy the users data below into it
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    //Exercise 2: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
    const usersWith3OrMoreLang  = users.filter(user => user.languages.length >= 3);

    //Exercise 3: Use .map to create an array of strings where each element is a user's email address
    const userEmails = users.map(user => user.email);


    //another way: using object destructuring
    // const emails = users.map(({email}) => email);
    // console.log(emails);

    //Exercise 4: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
    const avgYrs = users.reduce((total, user) =>{
        return total + user.yearsOfExperience;
    }, 0) / users.length;


    ////another solution: using object destructuring
    // const totalYrs = users.reduce((accumYrs, {yearsOfExperience}) =>{
    //     return accumYrs + yearsOfExperience;
    // }, 0) / users.length;


    //Exercise 5: Use .reduce to get the longest email from the list of users.
    const longestEmail = userEmails.reduce((emailOne, emailTwo) => {
        if(emailOne.length > emailTwo.length) {
            return emailOne;
        } else {
            return emailTwo;
        }
        });


    // //another solution for exercise 5
    // const thisEmail = users.reduce((accum, curr) => {
    //     return (curr.email.length > accum.length) ? curr.email : accum;
    // }, '');
    //
    // console.log(thisEmail);


    //Exercise 6: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
    const instructorsString = users.reduce((accumStr, {name}) => {
        return `${accumStr} ${name}, `;

    }, 'Your instructors are: ').slice(0, -2).concat('.'); //trims off last space and comma  //if you use negative numbers you will be cutting off the last 2 characters on the array

    console.log(instructorsString);



    //BONUS: Use .reduce to get the unique list of languages from the list of users.

    //STEPS:
    //add all lang. using reduce
    //convert to set
    //convert set back to array


    //Creates an array with ALL the languages
    const allLanguages = users.reduce((accum, curr) => {
        return accum.concat(curr.languages);
    }, []);
    console.log(allLanguages);


    //Creates an object new set that trims out any duplicates
    const uniqueLanguages = new Set(allLanguages); //this will give us a set that will trim out any duplicates
    console.log(uniqueLanguages);


    //This will turn the object into an array
    const arrUnique = Array.from(uniqueLanguages);
    console.log(arrUnique);

})();
