// console.log("Hello, world!");
// var statement = $("body").html("<h1>hello</h1>");
// console.log(statement);

$("body .changeMyHTML").html("<h1>Changed the HTML</h1>");
$(".changeMyText").text("This test was successful!");
$(".cage").append("<img src='https://upload.wikimedia.org/wikipedia/commons/d/d8/Friedrich-Johann-Justin-Bertuch_Mythical-Creature-Dragon_1806.jpg'>");

$(".cage").css({
  "border-width":"5px",
  "border-color":"orange",
  "border-style":"solid"
});
$(".cage img").click(function() {
  $(".cage img").attr("src", "https://media.mnn.com/assets/images/2018/07/cat_eating_fancy_ice_cream.jpg.838x0_q80.jpg");
});
