(function(){
    "use strict";

    /**
     * TODOne:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ["Luke", "Kara", "Frankie", "Lance"];

    /**
     * TODOne:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);


    /**
     * TODOne:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);


    /**
     * TODOne:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(let i = 0; i <= names.length - 1; i++){
        console.log('Here is a name: ' + names[i] + '.');
    }

    /**
     * TODOne:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(name) {
        console.log('Here is a name: ' + name + '.');
    });

//    These are helpful
//     var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// // loop through the array and log the values
//     shapes.forEach(function(shape) {
//         console.log('Here is a lovely shape: ' + shape + '.');
//     });

    /**
     * TODOne:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function first(x){
        console.log(x[0])
    }

    function second(x) {
        console.log(x[1])
    }
    function last(x) {
        console.log(x[(x.length -1)])
    }
    first(names);
    second(names);
    last(names);
})();