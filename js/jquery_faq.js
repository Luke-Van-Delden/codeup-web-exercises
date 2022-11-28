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


$(".button2").click(function () {
        $('li:nth-child(4)').toggleClass('yellowbackground');
});

$("h3").click(function () {
    $(this).next().css('font-weight', 'bold');
});

$("li").click(function () {
    $(this).parent().children().first().css('color', 'blue');
});

