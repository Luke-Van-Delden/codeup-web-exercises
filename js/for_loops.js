function showMultiplicationTable (x) {
    for (var i = 1; i < 11; i++) {
    console.log(x + " +  " + i + " = " + (i * x));
    }
}

showMultiplicationTable(8);

for (i = 1; i < 11; i++){
    console.log(((Math.floor(Math.random() * 11) + 20)));
}