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