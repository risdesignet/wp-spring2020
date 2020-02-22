$("document").ready(function() {
    // your code!
    var headerInput = $("div").html();
    var newPMessage = "This is a paragraph that's been manipulated by JQuery";
    console.log(headerInput);
    // Adds the html code from headerInput
    // $("p").html(headerInput);
    // Add the string of text from newPMessage to the first paragraph tag
    $("p").text(newPMessage);
    // Add a html paragraph inside of div
    $("div").append("<p>This is a paragraph inside a div that's been added with jquery</p>");

    // retrieve the size of the paragraph text
    console.log($("p").css("font-size"));

    // Add a mouse click listener event to all paragraph elements
    $("p").click(function(){
        // change the size, color, and alignment of the paragraph text for the paragraph object that was clicked
        // uses the "This" keyword
        $(this).css({
            "font-size":"48px",
            "color": "blue",
            "text-align" : "center"
        });
    })

    // Make any h1 I hover over have the class of additionalClass
    $("h1").hover(function(){
        console.log("Hovered");
        $(this).addClass("additionalClass");
    })
});
