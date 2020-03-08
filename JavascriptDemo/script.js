
console.log("You are reading this from the console");
var firstName = "Bobby Joe";
var lastName = "Smith III";
var fullName = firstName + " " + lastName;

console.log("First name: " + firstName);
console.log("Last name:" + " " + lastName);

function sayHello() {
  document.write("Hello" + " " + firstName + "</br>" + lastName);
  console.log(fullName);
}

function alertMe() {
  alert("This is an alert!");
}

function sayMyName(first, last) {
  console.log(first + " " + last);
}

sayHello();


var actionZone = document.getElementById("actionZone");
actionZone.addEventListener("click", function() {
  console.log("You clicked Action Zone");
  actionZone.style.backgroundColor = "blue";
  this.style.width = "200px";
})
actionZone.addEventListener("mouseover", function() {
  headLine.style.color = "orange";
})

var headLine = document.getElementById("headLine");

// Get second div
var div2 = document.getElementById("div2");
// Get html body element
var body = document.getElementsByTagName("body");
// Add hover event listener to div 2
div2.addEventListener("mouseover", function() {
  // add name to end of Document
  // create new html element
  var newEl = document.createElement("p");
  // create content
  var textNode = document.createTextNode(fullName);
  // add content to new html element
  newEl.appendChild(textNode);
  // add new html element to end of page
  console.log(newEl);
  body[0].appendChild(newEl);

})
