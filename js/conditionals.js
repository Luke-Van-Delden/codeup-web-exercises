"use strict";

/* ########################################################################## */

(function (){

/**
 * TODOne:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor (string){
//  //   let newstring = prompt("What color are you thinking of? (Lowercase only)");
//     if (string === "blue") {
//  //       console.log("blue is the color of the sky");
//         return "blue is the color of the sky";
//     }
//     else if (string === "red"){
//  //       console.log("Strawberries are red");
//         return "Strawberries are red";
//     }
//     else {
//  //       console.log("I don't know anything about " + string);
//         return "I don't know anything about " + string;
//     }
// }

// analyzeColor();

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODOne:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(randomColor);
console.log(analyzeColor(randomColor));
/**
 * TODOne:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

function analyzeColor(string) {
    switch (string) {
        case 'blue':
            return 'blue is the color of the sky';
            break;
        case 'red':
            return 'Strawberries are red';
            break;
         default:
            return "I don't know anything about " + string;
             break;
    }
}


/**
 * TODOne:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let usercolor = prompt("What color are you thinking of? (Lower case only)")
alert(analyzeColor(usercolor));
/* ########################################################################## */

/**
 * TODOne:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal (totalAmount){
    // luckyNumber = prompt("Pick a lucky number 1-5");
    // totalAmount = prompt("What is the total amount before discount?");
    let discountFactor = 0;
    alert("Your Lucky Number is: " + luckyNumber);
    switch (luckyNumber) {
        case 0:
            discountFactor = 1;
            break;
        case 1:
            discountFactor = .9;
            break;
        case 2:
            discountFactor = .75;
            break;
        case 3:
            discountFactor = .65;
            break;
        case 4:
            discountFactor = .5;
            break;
        case 5:
            discountFactor = 0;
            break;
    }
    let discountedPrice = (parseFloat(discountFactor) * parseFloat(totalAmount));
    alert("$" + parseFloat(totalAmount) + " was the total before discounts.");
    alert("Price after discount is now: $" + discountedPrice);
    return discountedPrice;
}

// console.log(calculateTotal());
/**
 * TODOne:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);
let userbill = prompt("What is your total bill?")
console.log(calculateTotal(userbill));


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

function writeanumber() {
    let isitnum = confirm("Would you like to enter a number? Click OK for 'Yes'");
    if (isitnum) {
        let usernum = prompt("Enter a number");
        if (!isNaN(parseFloat(usernum))) {
            alert("It is a number")
            if (usernum % 2 === 0) {
                alert("This number is even");
            } else {
                alert("This number is odd");
            }
            alert(usernum + " + 100 = " + (parseFloat(usernum) + 100));
            if (usernum > 0) {
                alert("This number is positive");
            } else if (usernum < 0) {
                alert("This number is negative");
            } else {
                alert("This number is 0!");
            }
        }
                else {
                alert("I'm sorry, but that is the incorrect data type.")
                }

        }
    else {
        alert("That's ok, I didn't want you to anyways");
        }
    }


writeanumber();

let userinput = prompt("Enter a number - as seperate functions");
function isEven(){
    if (userinput % 2 === 0) {
        alert("This number is even");
    } else {
        alert("This number is odd");
    }
}

function isPositive(){
    if (userinput > 0) {
        alert("This number is positive");
    } else if (userinput < 0) {
        alert("This number is negative");
    } else {
        alert("This number is 0!");
    }
    }

function plusHundred(){
    alert(userinput + " + 100 = " + (parseFloat(userinput) + 100));
}

function isnum() {
    if (!isNaN(parseFloat(userinput))){
        alert("This is a number");
    }
    else{
        alert("This is not the correct data type");
    }
}

isnum();
isEven();
isPositive();
plusHundred();

})()