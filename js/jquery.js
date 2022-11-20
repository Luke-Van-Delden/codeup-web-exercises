"use strict";

var userInput = [];

var konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];

var blitzBigHead = ["2", "0", "0", "ArrowRight", "Enter"];

var dinosaursForHire = ["c", "a", "ArrowLeft", "ArrowRight", "a", "b", "Enter"]

$(document).keyup(function (event) {

    var keyStroke = event.key;
    // PUSHES MOST RECENT KEYSTROKE INTO USERINPUT ARRAY
    userInput.push(keyStroke)

    // For checking inputs
    console.log(keyStroke);

    // WHEN 'ENTER' IS USED BUT FAILS TO MATCH ANY CODE
    if (userInput.toString().indexOf("Enter") > -1) {
        $("#success").html("Code Failed. You are not very good at cheating...").css("color", "black");
        $("#image").html("<a href='' style='margin: auto'><img src='images/githubicon.png' alt='codeupicon' class='imgstyle'></a>");
    }

    // CHECKS FOR INDEXOF = KONAMI CODE. RESETS USERINPUT TO EMPTY
    if (userInput.toString().indexOf(konamiCode.toString()) > -1) {
        $("#success").html("You have gained 30 lives and innnnnnnnfinite continues.").css("color", "darkgrey");
        $("#image").html("<a href=''><img src='images/contra.jpeg' alt='contra' class='imgstyle'></a>");
        userInput = [];
    }

    // CHECKS FOR INDEXOF = BLITZ CODE. RESETS USERINPUT TO EMPTY
    if (userInput.toString().indexOf(blitzBigHead.toString()) > -1) {
        $("#success").html("With the LATE HIT!").css("color", "blue");
        $("#image").html("<a href='https://youtu.be/3IPZZvaKcV0?t=6'><img src='images/blitz.jpeg' alt='BigHead' class='imgstyle'></a>");
        userInput = [];
    }

    // CHECKS FOR INDEXOF = DINOSAURS CODE. RESETS USERINPUT TO EMPTY
    if (userInput.toString().indexOf(dinosaursForHire.toString()) > -1) {
        $("#success").html("Dinosaurs with guns... What's cooler than that???").css("color", "firebrick");
        $("#image").html("<a href='https://youtu.be/_AxxAJYcD64?t=160'><img src='images/Dinosaurs_For_Hire.webp' alt='BigHead' class='imgstyle'></a>");
        userInput = [];
    }
});