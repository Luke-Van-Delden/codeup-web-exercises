function showMultiplicationTable (x) {
    for (var i = 1; i < 11; i++) {
    console.log(x + " +  " + i + " = " + (i * x));
    }
}

showMultiplicationTable(8);

for (i = 1; i < 11; i++){
    let evenodd = "odd";
    if (i % 2 !== 0){
        evenodd = "even"
    }
    console.log(((Math.floor(Math.random() * 181) + 20)) + " is " + evenodd);
}

for (i = 1; i < 10; i++){
    let istring = i.toString()
    let final = "";
    for (x= 0; x < i ; x++) {
        final = final + istring;
    }
    console.log(final)
}

for (i = 100; i > 0; i-=5){
    console.log(i);
}