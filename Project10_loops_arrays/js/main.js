function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X; X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}
//loop to count up from 1 to 10, exiting the loop once 11 is reached.

document.getElementById("string").innerHTML = String(new Date()) + "<br>" + String("12345") + "<br>" + String(12345);
//this prints the date and time when the webpage is loaded.  
//The String() method also turns the numbers "12345" into a one string
//the "<br>" creates a page break between "String(new Date())" and "String("12345")"

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute",];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
//create 3 variables
//loop that lists the instruments and adds a <br> between each item in the array
//created array object with 7 instruments in it; indexed 0-6
//sent List_of_Instruments over to HTML

var Children = ["Theodore", "Olivia", "Mike", "Liam", "Rachael", "Nicole"]
var Content= "";
var X;
function array_Function() {
    for (X = 0; X < Children.length; X++) {
        Content += Children[X] + "<br>";
    }
    document.getElementById("Array").innerHTML = Content;
}

//creates an [array] in the variable "Children"
//[array] contains 6 values (names), indexed 0-5
//creates 3 variables; Children, Content, X
//creates function array_Function() to do a for Loop to list each value and add a "<br>"
//sends "Array" element to HTML
//I am noticing that when I have this underthe for_Loop in html, whichever's button I press first, gets added to the second button I press on the page
//how do I get html to not add previous array ontop of 2nd array clicked?

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand: "Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}
//the const element is used within the function to set the value of Musical_Instrument
//const sets a value and it cannot be changed

var X = 50;
document.write("<br>" + X);
{
    let X = 25;
    document.write("<br>" + X);
}
document.write("<br>" + X);
//the "let" element is used within a block to set the value of X

function myFunction(name) {
    return "Hello " + name;
}
document.getElementById("return").innerHTML = myFunction("John");
//the return element stops the execution of a function and returns a value

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
//use the let element to set the variable "car" with array
//used this element to concatenate the year, color, make and model into 1 sentence

let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;
//uses the break element to stop the loop at 3

let type = "";
for (let X = 0; X < 10; X++) {
    if (X === 3) { continue; }
    type += "The number is " + X + "<br>";
}
document.getElementById("continue").innerHTML = type;
//uses the continue element to skip over the number 3 and continue
