var X = 25;
function add_numbers_1() {
    var Y = 15;
    document.write(X + Y + "<br>");
}
//variable X is global.  Variable Y is local.
function add_numbers_2() {
    var Y = 10;
    document.write(X + Y);
}
//Variable X is global. Variable Y is local.
add_numbers_1();
add_numbers_2();

var z = 10
function mistake() {
    console.log(Z + 20);
}
//console log function to help debug.  var z is lower cased while "Z" is uppercase.

mistake();

function get_Date() {
    if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}
//function using if statement.  if its before 6pm, function will state "How are you today?" otherwise, nothing.

function my_If_Statement() {
    if (new Date().getSeconds() < 30) {
        document.getElementById("myIfStatement").innerHTML = "Its the bottom of the minute.";
    }
    else{
        document.getElementById("myIfStatement").innerHTML = "Its the top of the minute.";
    }
}
//if/else statement, if the seconds in the time are lower that 30s it'll state "bottom" sentence, otherwise "top" sentence


function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 16) {
        Drive = "You are old enough to drive!";
    }
    else {
        Drive = "You are not old enough to drive!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Drive;
}
// added an input and button element to this function

function Color_Function() {
    Color = document.getElementById("Color").value;
    if (Color == "Blue") {
        Reply = "Blue is my favorite color too!";
    }
    else if (Color == "Red") {
        Reply = "Red can be fun!";
    }
    else if (Color == "Green") {
        Reply = "Ah, yes.  The color of money!"
    }
    else {
        Reply = "Your color is beautiful!";
    }
    document.getElementById("Your_color").innerHTML = Reply;
}
// Else/If statements within a function.  Using an input element and button.

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}