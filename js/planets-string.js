(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|")
    var linebr = planetsArray.join("<br>")


    /**
     * TODOne:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    console.log(planetsArray);
    console.log(linebr)

    /**
     * TODOne:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let bonusString = planetsArray;
    let newString = bonusString.join(`<li>`);
    newString = "<ul><li>" + newString + "</li></ul>";
    console.log(newString);
// THIS IS A SOLUTION?
    // planetsArray.unshift(("<ul>"));
    // planetsArray.push(("</ul>"));
    // planetsArray.forEach(function(planet) {
    //     if (planet !== "<ul>" && planet !== "</ul>")
    //     planet = "<li>" + planet + "</li>";
    //     console.log(planet);
    // })



//    var linebr = planetsArray.join("<br>")
//    var one = planetsArray.join("</li><li> ");
//     console.log(one)
//
//     var two = one.split(" ");
//     console.log(two)
//     two.unshift("<ul><li>");
//     console.log(two)
//     two.push("</li></ul> ")
//     console.log(two);
//
//   let three = two.join(" ")
//     console.log(three)

    //  var lico = lic.push("</li></ul>");
//     var lic =

    // USE push and unshift for final <ul></ul>
    //console.log(planetsArray)


})();