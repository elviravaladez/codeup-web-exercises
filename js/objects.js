(function (searchElement, fromIndex) {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
      firstName: "Elvira",
      lastName: "Valadez",
    };

    console.log(person.firstName); //'Elvira'
    console.log(person.lastName); //'Valadez'


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    person.sayHello = function () {
        return "Hello from " + person.firstName + " " + person.lastName + "!";
    };

    console.log(person.sayHello()); //"Hello from Elvira Valadez!"


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount.
     *
     * Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    //if shoppers buy products costing > 200 ---> shoppers receive 12% discount
        //else ---> no discount( amount stays the same)

    //use conditionals

    //code must display a line with
        //name of person
        //amount before discount
        //the discount (if any)
        //the amount after the discount

    //use a foreach loop to iterate through the array and console.log relevant info

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


    shoppers.forEach(function (shopper) {
        var shopperName = "Shopper Name: " + shopper.name;

            var beforeDiscountPrice = shopper.amount;
            var amountBeforeDiscount = "Amount Before Discount: $" + beforeDiscountPrice.toFixed(2);

        if(shopper.amount > 200) {
            var total;

            total = shopper.amount.toFixed(2);

            var discount = total * .12;
            var afterDiscountPrice = (total - discount );

            var discountMsg = "Discount: $" + discount.toFixed(2);
            var afterDiscountMsg = "Amount After Discount: $" + afterDiscountPrice.toFixed(2);

            console.log(shopperName + " | " + discountMsg + " | " + afterDiscountMsg);
        } else {
            var amountAfterDiscount ="Amount After Discount: $" + shopper.amount.toFixed(2);

            console.log(shopperName + " | " + "Discount: $0.00" + " | " + amountAfterDiscount );
        }

        console.log("======================");
    });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "How Not to Die",
            author: {
                firstName: "Michael",
                lastName: "Greger"
            }
        },
        {
            title: "Chicka Chicka Boom Boom",
            author: {
                firstName: "Bill",
                lastName: "Martin"
            }
        },
        {
            title: "JavaScript: The Good Parts",
            author: {
                firstName: "Douglas",
                lastName: "Crockford"
            }
        },
        {
            title: "She Persisted",
            author: {
                firstName: "Chelsea",
                lastName: "Clinton"
            }
        },
        {
            title: "Dragons Love Tacos",
            author: {
                firstName: "Adam",
                lastName: "Salmieri"
            }
        }
    ];

    //console.log(books); //to assure array of objects was coded correctly
    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function (book) {
        var bookNum = (books.indexOf(book) + 1);
        console.log("Book # " + bookNum);

        books.forEach(function(title) {
            console.log(("Title: " + book.title));
        });

        books.forEach(function (author) {
            console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        });

        console.log("---");
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.

     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    function createBook(title, firstName, lastName) {
        var book = {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName
            }
        };
        return book;
    }


    var books =[
    createBook("How Not to Die", "Michael", "Greger"),
    createBook("Chicka Chicka Boom Boom", "Bill", "Martin"),
    createBook("JavaScript: The Good Parts", "Douglas", "Crockford"),
    createBook("She Persisted", "Chelsea", "Clinton"),
    createBook("Dragons Love Tacos", "Adam", "Salmieri")
    ]

    console.log(books);


})();
