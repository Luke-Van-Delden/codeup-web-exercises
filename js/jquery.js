"use strict";
$(document).keyup(function(event){
    let series = event.key;
    console.log(event.key);
    if (series === "ArrowUp") {
        $("#success").html("You have gained 30 lives and innnnnnnnfinite continues.");
    }
});


var konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];


// ↑ ↑ ↓ ↓ ← → ← → B A