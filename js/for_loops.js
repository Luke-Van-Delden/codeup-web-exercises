function showMultiplicationTable (x) {
    for (var i = 1; i < 11; i++) {
    console.log(x + " +  " + i + " = " + (i * x));
    }
}

showMultiplicationTable(8);

for (i = 1; i < 11; i++){
    let evenodd = "even";
    if (i % 2 !== 0){
        evenodd = "odd"
    }
    console.log(((Math.floor(Math.random() * 181) + 20)) + " is " + evenodd);
}