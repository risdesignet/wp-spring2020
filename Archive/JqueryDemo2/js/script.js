$(document).ready(function() {
    var text = "I want you to write this text instead";
    var number = 42;
    // $("p").html("<h1>Greetings World!</h1>");
    $("p").text(text + " " + number);
    // $(".contentBox").html("<h2>HTML Overwrite!</h2>");
    $(".contentBox").append("<h2>Add this HTML too!</h2>");

    // Find out the html inside of HTML element with class of contentBox
    var stuff = $(".contentBox").html();
    console.log(stuff);

    // Change size and color of paragraph text
    $("p").css({
        "font-size": "22px",
        "color" : "blue",
        "font-style": "oblique"
    });

    // Change background color when clicked
    $(".contentBox").click(function() {
        $(".contentBox").addClass("redBackground");
        $("h2").slideToggle();
    })
    $("div").hover(function() {
        $(this).toggleClass("greenBackground");
    })

    // On click give all elements with class bar a random height and width;
    $("div.bar").click(function() {
        $("div.bar").each(function(index, element) {
            var random = 300*Math.random();
            $(this).css("height",random+"px");
            $(this).css("width",random+"px");
        })
    })


    // console.log(paragraph);
})
