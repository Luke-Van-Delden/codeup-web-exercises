"use strict";

var userInput = [];
// var dinosaurInput = [];
var konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];
var blitzBigHead = ["2", "0", "0", "ArrowRight", "Enter"];
var dinosaursForHire = ["c", "a", "ArrowLeft", "ArrowRight", "a", "b", "Enter"]
// TODO: Write using indexOf, using unshift, to check for certain lengths by creating more userinput arrays.
// TODO: Change Div on contra code
$(document).keyup(function (event) {
    var keyStroke = event.key;
    userInput.push(keyStroke);
    // console.log(event.key);
    // dinosaurInput.push(keyStroke);
    console.log(keyStroke);
    if (userInput.toString().indexOf(konamiCode.toString()) > -1) {
            $("#success").html("You have gained 30 lives and innnnnnnnfinite continues.");
            $("#image").html("<a href=''><img src='images/contra.jpeg' alt='contra'></a>");

    }
    // if (userInput.length === blitzBigHead.length) {
    //     if (userInput.toString() === blitzBigHead.toString()) {
    //         $("#success").html("With the LATE HIT!").css("color", "firebrick");
    //         $("#image").html("<a href='https://youtu.be/3IPZZvaKcV0?t=6'><img src='images/blitz.jpeg' alt='BigHead'></a>");
    //         userInput = [];
    //     }
    // }

    // if (userInput.length === blitzBigHead.length) {
        if (userInput.toString().indexOf(blitzBigHead.toString()) > -1) {
            $("#success").html("With the LATE HIT!").css("color", "firebrick");
            $("#image").html("<a href='https://youtu.be/3IPZZvaKcV0?t=6'><img src='images/blitz.jpeg' alt='BigHead'></a>");
        }
    // }



    if (userInput.length === dinosaursForHire.length) {
        if (userInput.toString() === dinosaursForHire.toString()) {
            $("#success").html("Dinosaurs with guns... What's cooler than that???").css("color", "firebrick");
            $("#image").html("<a href='https://youtu.be/_AxxAJYcD64?t=160'><img src='images/Dinosaurs_For_Hire.webp' alt='BigHead'></a>");
            // dinosaurInput = [];
            // userInput = [];
            // console.log(dinosaurInput);
        }
    }
    // if (keyStroke === "Enter") {
    //     userInput = [];
    // }
});