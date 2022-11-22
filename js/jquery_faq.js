// SELECTS ALL DD ELEMENTS PER EXERCISE
$("dt").click(function () {
    $('dd').toggleClass("invisible")
});

$("dt").click(function () {
    $(this).toggleClass("highlight")
});



// SELECTS ONLY THE INDIVIDUAL DD
// $("dt").click(function () {
//     $(this).next().toggleClass("invisible")
// });