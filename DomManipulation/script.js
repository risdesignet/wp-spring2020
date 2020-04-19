console.log("External Javascript Connected");

/*
change background color on click:
  1. Listen for click event on div
  2. Change background color to something other than red
*/
var div1 = document.getElementsByClassName("div1")[0];
var h1 = document.getElementsByTagName("h1")[0];

div1.addEventListener("click", function(){
  console.log("Div1 Clicked");
  div1.style.backgroundColor = "blue";
});

// Change background color of div1 when clicking on h1
h1.addEventListener("click", function() {
  div1.style.backgroundColor = "green";
})

// Change cursor to pointer when hovering over h1
h1.addEventListener("mouseover", function() {
  console.log("Hovering");
  h1.style.cursor = "pointer";
})

// Select div2 and h2 from DOM
var div2 = document.getElementById("div2");
var h2 = document.getElementsByTagName("h2")[0];
// Add growTurn class with the growAndTurn animation to div2 when clicking on the h2
h2.addEventListener("click", function() {
  div2.classList.add("growTurn");
})

var div3 = document.getElementsByTagName("div")[2];
// var div3 = document.getElementById("div3");
div3.addEventListener("click", function() {
  console.log("Clicked Div 3");
  div3.style.display = "none";
})

function showDiv3() {
  // console.log("Show Div 3");
  div3.style.display = "block";
}

function addPara() {
  //Create HTML Element
  para = document.createElement("p");
  // Create Text Node
  text = document.createTextNode("Hello, world!");
  // Put the text node inside of the paragraph element we created
  para.appendChild(text);
  // Take the paragraph element and append to the body
  var body = document.getElementsByTagName("body")[0];
  // Append paragraph element inside of body
  body.appendChild(para);

}
