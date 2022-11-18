"use strict";

var userInput = [];
var konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];

$(document).keyup(function(event){
    var keyStroke = event.key;
    userInput.push(keyStroke);
    console.log(event.key);
    if (userInput.length === konamiCode.length){
        if (userInput.toString() === konamiCode.toString()) {
            $("#success").html("You have gained 30 lives and innnnnnnnfinite continues.");
        }
        else {
            $("#success").html("Close but no cigar");
            console.log(userInput);
            console.log(konamiCode);
            userInput = [];
        }
    }
    if (keyStroke === "Enter" && userInput.length !== konamiCode.length){
        $("#success").html("Invalid code Entered");
        userInput = [];
    }
    // COULD USE A COUNTER = 0, ++ ON KEYSTROKE ENTER
    //
    // if (series === "ArrowUp") {
    //     $("#success").html("You have gained 30 lives and innnnnnnnfinite continues.");
    // }
});


// ↑ ↑ ↓ ↓ ← → ← → B A