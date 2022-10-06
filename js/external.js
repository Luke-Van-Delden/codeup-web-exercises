console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

let favcol = prompt("What's your favorite color?");

alert("Great, " + favcol + " is my favorite color too!");

let lmm = prompt("How many days are you renting little mermaid?");

let bb = prompt("How many days are you renting brother bear?");

let her = prompt("How many days are you renting hercules?");


let total = (((Number(lmm)) + (Number(bb)) + (Number(her))) * 3);

alert("The total cost is $" + total);

let ama = prompt("How many hours did you work at Amazon?");
let fac = prompt("How many hours did you work at Facebook?");
let goo = prompt("How many hours did you work at Google?");

alert("Total Compensation per Comapny:" + "\n" +
    "$"+ (380 * ama) + " with Amazon" + "\n" +
    "$" + (350 * fac) + " with Facebook" + "\n" +
    "$" + (400 * goo) + " with Google" + "\n" +
    "$" + ((380 * ama) + (350 * fac) + (400 * goo)) + " Total");

alert("Time to enroll for a class");
let full = confirm("Is the class you are looking to enroll in full?");
let notavail = confirm("Do you have any other classes at this time?");
let stuEnr = (!full && !notavail)
if (stuEnr == true) {
    alert("Congrats! You are now enrolled");
}
else if (notavail && full){
    alert("Sorry, the class is full and you have a schedule conflict");
}
else if (full){
    alert("Sorry the class is full")
}
else if (notavail){
    alert("Sorry, you have a conflicting schedule");
}

let member = confirm("Are you a member?");
let items = prompt("How many items are you purchasing?");
let expired = confirm("Has the offer expired?")

if ((member == true) && !expired) {
    alert("Great news! You qualify for a special promotion!");
}
else if (((Number(items)) >= 2) && !member && !expired){
    alert("Great news! You qualify for a special promotion!");
}
else {
    alert("Sorry, you do not qualify for any promotions.");
}