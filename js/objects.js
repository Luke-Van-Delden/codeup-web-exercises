(function() {
    "use strict";

    /**
     * TODOne:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {}
    person.firstName = "Luke";
    person.lastName = "Van Delden";
    console.log(person.firstName);
    console.log(person.lastName);


    /**
     * TODOne:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function() {
        return "Hello from " + person.firstName + " " + person.lastName;
    }
    console.log(person.sayHello())


    /** TODOne:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     *
     * display a line with the name of the person,
     * the amount before the discount,
     * the discount,
     * if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // assigning log unnecessary?
    shoppers.log = function() {
        shoppers.forEach(function(person) {
            if (person.amount >= 200) {
                console.log((person.name + "is spending " + person.amount + ". Before discount: " + person.amount + ". They save $" + (person.amount * .12) + ". After Discount: " + (person.amount * .88)))

            }
            else {
            console.log((person.name + "is spending " + person.amount + ". No discounts applicable. Price remains same."))
            }
        });
    }

    shoppers.log();


    /** TODOne:
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
    var books;
    books = [
        {
            title: 'Harry Potter',
            author: {
                firstName: "JK",
                lastName: "Rowling"
            }
        },
        {
            title: 'Of Mice and Men',
            author: {
                firstName: "John",
                lastName: "Steinbeck"
            }
        },
        {
            title: 'Fellowship of the Ring',
            author: {
                firstName: "JRR",
                lastName: "Tolkein"
            }
        },
        {
            title: 'The Two Towers',
            author: {
                firstName: "JRR",
                lastName: "Tolkein"}},
        {
            title: 'Return of the King',
            author: {
                firstName: "JRR",
                lastName: "Tolkein"}}
    ];
// LINE BELOW NOT NEEDED
    books.log = function() {
        books.forEach(function(book) {
            console.log("Book #" + (books.indexOf(book) + 1))
            console.log("Title: " + book.title)
            console.log("Author: " + book.author.firstName + " " + book.author.lastName)
            console.log("--------------------")

        });
    }
    books.log();
    /**
     * TODOne:
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
function createBook () {
        var a = prompt("What is the title?");
        var b = prompt("What is the author's fist name?");
        var c = prompt("What is the author's fist name?");
        var newBook = [
            {title: a, author: {first: b, last: c}}
        ];
        let newerbook = newBook
        newBook.showbookInfo = function (){
            newerbook.forEach(function(book) {
                console.log("Book #" + (newerbook.indexOf(book) + 1))
                console.log("Title: " + book.title)
                console.log("Author: " + book.author.first + " " + book.author.last)
                console.log("--------------------")
            })
        };
       newBook.showbookInfo();
        return newerbook
        // cars.forEach(function(car) {
        //     car.features.forEach(function(feature) {
        //         console.log(feature);
        //     });
        // });
    }

    createBook();


})();