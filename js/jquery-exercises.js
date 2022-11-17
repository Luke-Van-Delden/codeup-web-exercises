$("h1").click(function() {
    $("h1").css("background-color", "firebrick");
});

$("p").dblclick(function() {
    $("p").css("font-size", "18px");
});

$("li").hover(
    function() {
    $("li").css("color", "red");
},
    function() {
        $("li").css("color", "black");
    });