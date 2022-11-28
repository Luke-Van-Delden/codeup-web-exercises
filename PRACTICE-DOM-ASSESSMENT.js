/**
 * Write your solutions here
 */
// #1
$(".dbl-click-box").dblclick(function(){
    alert("BOX DOUBLE-CLICKED");
});

// #2
$("#dark-mode-btn").click(function(){
    $('body').toggleClass("dark-mode");
});

// #3
var words = $('#uppercase').html();

$('#uppercase').hover(
    function() {
        $('#lowercase').html(words.toLowerCase());
    },
    function() {
        $('#lowercase').html("");
    }
);

// #4
var count = 0;
var interval = 1000; // interval time in milliseconds

setInterval(function () {
    count++;
    $('#counter').html(count);
}, interval);


// #5
var listchar = function (x) {
    let splitstring = x.split('');
    let htmloutput = ""
    for(let i = 0; i < splitstring.length; i++){
        if (splitstring[i] !== ','){
            htmloutput += "<li>" + splitstring[i] + "</li>"
        }
    }
    return htmloutput;
}
$("#list-chars-btn").click(function(e){
    e.preventDefault();
    let listwords = $('#characters').val();
    console.log(listchar(listwords));
    $('#characters-list').html(listchar(listwords));
});

// #6
$("#clean-animal-list-btn").click(function(){
    $('.animal-list-item').css('display', 'none');
    $('.animal-list-item').each(function() {
        let animal = $(this).html();
        $(this).next().html("This is a... " + animal);
    });
});


// #7
$('.hidden-letters div').hover(
    function() {
        $(this).children().css("visibility", 'visible');
    },
    function() {
        $(this).children().css("visibility", 'hidden');
    }
);
