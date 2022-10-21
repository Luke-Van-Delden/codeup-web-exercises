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