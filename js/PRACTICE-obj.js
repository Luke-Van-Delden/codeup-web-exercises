//
// // #LAO Review
// // ##Questions
// // 1. Write a function that takes in a grocery item object and returns a string representing the price per item for that object.
// //
// //     ```
// // ex.
// let item = {
// 	name: "potatoes",
// 	quantity: 20,
// 	totalPrice: 47
// };
// //
// // getPricePerItem(potatoes) // returns "$2.35"
// // ```
//
// function getPricePerItem(a) {
//     let pricePer = (a.totalPrice / a.quantity);
//     return "$" + pricePer;
// }
//
// console.log(getPricePerItem(item))
//
//
// //
// // 2. Write a function that takes in two string arguments: the first being the string assessed, and the second being a single letter. The function should return a count of the occurrences of the letter (second argument) within the string (first argument). This function should count both upper and lowercase instances of the letter.
// //
// //     ```
// // ex.
// // countOccurrencesOfLetter("horseradish", "s") // returns 2
// // countOccurrencesOfLetter("Microsoft Excel: Professional Edition". "E") // returns 4
// // countOccurrencesOfLetter("Sanrio", "x") // returns 0
// // ```
// function countOccurrencesOfLetter(word, letter) {
//     let number = 0
//     for (i=0; i < word.length; i++) {
//         if (word.substring(i, i+1) == letter.toUpperCase() || word.substring(i, i+1) == letter.toLowerCase()){
//             number++;
//         }
//     }
//     return number
// }
//
// console.log(countOccurrencesOfLetter("Microsoft Excel: Professional Edition", "E"));
//
// //
// // 3. Write a function that takes in an array of  grocery item objects and returns the object with the highest `weightInGrams` property.
// //
// //     ```
// // ex.
// const cart = [
// 	{
// 		name: "Kingsford Charcoal",
// 		weightInGrams: 4535
// 	}, {
// 		name: "Krazy Glue",
// 		weightInGrams: 55
// 	}, {
// 		name: "NVIDIA RTX 4090",
// 		weightInGrams: 2186
// 	}
// ];
// // getHeaviestItem(cart) // returns {name: "Kingsford Charcoal", weightInGrams: 4535}
// // ```
//
// function getHeaviestItem(x){
//     let heaviest = {weightInGrams: 0}
//     for (i = 0; i < x.length; i++){
//         if(x[i].weightInGrams > heaviest.weightInGrams){
//             heaviest = x[i];
//         }
//     }
//     return heaviest;
// }
//
// console.log(getHeaviestItem(cart))
// //
// // 4. Write a function that takes in an array of numbers and returns an array of numbers from the original array that are evenly divisible by 13. If a number is not evenly divisible by 13, it should not be returned. If no elements within the array are evenly divisible by 13, the function should return an empty array.
// //
// //     ```
// // ex.
// const arr1 = [24, 25, 26, 27, 29];
// const arr2 = [13, 26, 39, 52, 65];
// const arr3 = [0, 1, 2, 3, 4, 5];
// //
// // getAllDivisibleByThirteen(arr1) // returns [26]
// // getAllDivisibleByThirteen(arr2) // returns [13, 26, 39, 52, 65]
// // getAllDivisibleByThirteen(arr3) // returns []
// // ```
// function getAllDivisibleByThirteen(arr){
//     let divide = [];
//     for (i=0; i < arr.length; i++){
//         if (arr[i] % 13 === 0)
//             divide.push(arr[i]);
//     }
//     return divide;
// }
//
// console.log(getAllDivisibleByThirteen(arr1))
// console.log(getAllDivisibleByThirteen(arr2))
// console.log(getAllDivisibleByThirteen(arr3))
//
// //
// // 5. Write a function that takes in a string and returns an object with the following properties:
// //     1. `string` which is to be set the to the argument passed into the function.
// // 2. `numberOfWords` which is to be set to the number of words within the string.
// // 3. `instancesOfE` which to be set to the number of instances of the letter "E" within the argument passed into the function. The count should reflect instances of both uppercase and lowercase "E" (HINT: a previous function maybe useful in achieving this).
// //
// // ```
// // ex.
// console.log(reviewString("Dielectric Grease")) // returns {string: "Dielectric Grease", numberOfWords: 2, instancesOfE: 3}
// console.log(reviewString("Street Fighter EX3")) // returns {string: "Street Fighter EX3", numberOfWords: 3, instancesOfE: 4}
// console.log(reviewString("99")) // returns {string: "99", numberOfWords: 1, instancesOfE: 0}
// // ```
//
// function reviewString(string) {
//     let newstring = {string: "",
//         numberOfWords: 1,
//         instancesOfE: 0};
//     newstring.string = string;
//     for (i=0; i < string.length; i++) {
//         if (string.substring(i, i+1) == "e" || string.substring(i, i+1) == "E"){
//             newstring.instancesOfE++
//         }
//         if (string.substring(i, i+1) == " "){
//             newstring.numberOfWords++
//         }
//     }
//     return newstring;
// }

