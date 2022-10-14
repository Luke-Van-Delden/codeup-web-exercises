let i = 2;

while (i < 35000) {
    i = i * 2;
    console.log(i)
}

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
let conesleft = allCones
do {
    let order = Math.floor(Math.random() * 5) + 1
    conesleft = conesleft - order;
    if (conesleft > 0 && conesleft < order) {
        console.log("Cannot sell you " + order + " cones I only have " + conesleft + "...");
    }
    else if (conesleft > 0){
            console.log(order + " cones sold..")
        }
    else {
        console.log("Yay! I sold them all!");
        break;
    }
} while (allCones > 0)
