// Write a function that when passed an object will return the value of the object’s price property.
//     Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
// getPrice(obj); // returns “$7.89”

let obj = {
    name: "Potatoes",
    quantity: 2,
    price: "$7.89"};

function objPrice(obj){
    return obj.price
}

console.log(objPrice(obj));

const arr = ["Green", "Blue", "Periwinkles"]


// CAN DO A for of Loop - REVIEW For of if needed
function getLongestString(stringArray){
    let longeststring = "";
    for (var i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length > longeststring.length) {
            longeststring = stringArray[i];
        }
    }
    return longeststring
}

console.log(getLongestString(arr));

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

// USING A FOR EACH LOOP
function getTallestHamster(arr) {
    let bigham = {heightInMM: 0}
    arr.forEach(function(el){
        if (el.heightInMM > bigham.heightInMM){
            bigham = el;
        }
    })
    return bigham;
}

// USING A FOR OF LOOP
function other(){
    let bigger = {heightInMM: 0}
    for (let a of hamsters){
        if (a.heightInMM > bigger.heightInMM) {
            bigger = a;
        }
    }
    return bigger;
}

// USING FOR LOOP
function forloop(arr){
    let bigham = {heightInMM: 0}
    for (i = 0; i < arr.length; i++){
        if (arr[i].heightInMM > bigham.heightInMM){
            bigham = arr[i];
        }
    }
    return bigham;
}
console.log(getTallestHamster(hamsters));
console.log(other(hamsters));
console.log(forloop(hamsters));
// should return {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"};