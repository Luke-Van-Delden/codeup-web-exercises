let newinput = "";

// USING A FOR LOOP AND TESTING UP TO 10 TIMES
for (i = 0; i < 10; i++){
    newinput = parseInt(prompt("What number should we stop at bewtween 1 and 50? Must enter a number."));
    if (newinput >= 1 && newinput < 50) {
        break;
    }
}

for (i = 0; i < 50; i++){
    if (i == newinput) {
        console.log("Yikes! Skipping number: " + newinput)
    }
    else if (i % 2 === 1) {
        console.log("Here is an odd number: " + i)
    }
    else {
        continue;
    }
}

// BELOW ARE ALTERNATIVE WAYS TO COMPLETE

// USING A DO WHILE LOOP AND TESTING INFINITELY TIL PARAMETERS MET
// let input = parseInt(prompt("What number should we stop at bewtween 1 and 50? Must enter a number."));
// let newinput = parseFloat(input)
// console.log(typeof newinput);// TESTING PURPOSES
// console.log(input); //TESTING PURPOSES
// do {
//     newinput = parseInt(prompt("What number should we stop at bewtween 1 and 50? Must enter a number."));
//     if (newinput >= 1 && newinput < 50) {
//         break;
//     }
// } while (newinput !== true)


// CODED NOT USING CONTINUE OR BREAK
// let input = parseInt(prompt("What number should we stop at bewtween 1 and 50? Must enter a number."));
// // console.log(typeof input); TESTING FOR TYPE OF INPUT
// while (isNaN(parseInt(input))) {
//     input = parseInt(prompt("What number should we stop at between 1 and 50? Must enter a number."));
// }

// CODED NOT USING CONTINUE OR BREAK
// console.log(typeof input); TESTING PURPOSES
// console.log(input); TESTING PURPOSES

// for (var i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }