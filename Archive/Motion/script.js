// Variables storing data — both Strings and Integers
var testMessage = "This is the test message";
var testMessage2 = "This is the second test message";
var numTimesToRepeat = 101;

// A "For Loop,"" which repeats the commands inside of the curly brackets while the condition inside of the parenthesis is true.
for (var iteration = 0; iteration < numTimesToRepeat; iteration++) {
    console.log(testMessage);
}

// A "If Statement" which executes the code inside of the curly brackets if the condition inside of the parenthesis is true
var i = 0;
if (i < numTimesToRepeat == true) {
    console.log(testMessage2);
    i++;
}

// Sending whatever is inside of the parenthesis to the console, which you can find in the browser's developent tools/inspector. A person viewing your website wont see it unless they have the inspector open.
console.log(2+3);
// This creates an alert message. Whatever is inside of the parenthesis appears in a pop-up on the screen.
alert(testMessage);
