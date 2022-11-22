// SELECTS ALL DD ELEMENTS PER EXERCISE
$(".button1").click(function () {
    $('dd').toggleClass("invisible")
});

$("dt").click(function () {
    $(this).toggleClass("highlight")
});



// SELECTS ONLY THE INDIVIDUAL DD
// $("dt").click(function () {
//     $(this).next().toggleClass("invisible")
// });