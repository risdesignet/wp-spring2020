// An array of car names
var carNames = [
    "Malibu",
    "Journey",
    "Mercedes",
    "Lexus",
    "Tsuru",
    "Jeep",
    "Prius"
];

// An array of people names
var team = [ "Sally", "Jim", "Bob"];

// for (var i = 0; i <= carNames.length; i++ ) {
//     console.log(carNames[i]);
// }

// Iterate over all of the car names in the arrat carNames and console.log them
for (var car in carNames) {
    var nameOfCar = 10;
    console.log(carNames[car]);
}




// Say hello to a person
function sayHello(firstName) {
    document.write("Hello" + " " + firstName);
}

// Tell the browser to run the sayHello function
sayHello(team[2]);


function driverInfo(firstName, car) {
    document.write(firstName + " " + "drives a" + " " + car);
}

driverInfo(team[1], carNames[4]);

// Only say hello to Sally
function sayHelloIfSally(person) {
    if (person == "Sally") {
        document.write("Hello" + " " + person);
    } else if (person == "Bob") {
        console.log("Ignore " + person);
    }
    else {
        console.log("Wave to " + person);
    }
}

// iterate over team and choose whether to say hello
for (var teammate in team) {
    sayHelloIfSally(team[teammate]);
}
