function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}
// + is the operator to add in JS

function subtraction_Function() {
    var subtraction = 5 - 3;
    document.getElementById("Sub").innerHTML = "5 - 3 = " + subtraction;
}
// - is the operator to subtract in JS

function multiplication_Function() {
    var multiply = 5 * 10;
    document.getElementById("Multiply").innerHTML = "5 x 10 = " + multiply;
}
// * is the operator to multiply in JS

function division_Function() {
    var divide = 10 / 5;
    document.getElementById("Divide").innerHTML = "10 / 5 = " + divide;
}
// / is the operator to divide in JS

function long_Function() {
    var long = (1 + 5) * 5 / 2 - 6;
    document.getElementById("Long").innerHTML = "(1 + 5) x 5 / 2 - 6 = " + long;
}
// you can do multiple mathmatical operations at one time

function modulus_Function() {
    var mod = 25 % 6;
    document.getElementById("Mod").innerHTML = "The remainder when you divide 25 by 6 is: " + mod;
}
// % is the modulus operator in JS. This gives the remainder after dividing the two numbers.

function negation_Function() {
    var X = 15;
    document.getElementById("Neg").innerHTML = "The opposite of 15 is: " + -X;
}
// putting the - in front of the variable makes it the opposite of what the number currently is.

function increment_Function() {
    var Y = 16;
    Y++;
    document.getElementById("Inc").innerHTML = "One more than 16 is: " + Y;
}
// ++ increments the number by 1

function decrement_Function() {
    var Z = 12;
    Z--;
    document.getElementById("Dec").innerHTML = "One less than 12 is: " + Z;
}
// -- decrements the number by 1



function random_Function() {
    var T = Math.random();
    document.getElementById("Random").innerHTML = "Can you guess what number I'm thinking of between 0 and 100? " + T;
}
// Math.random() creates a random number

window.alert(Math.random() * 100);
// * 100 in the Math.random function creates a number between 0 and 100

function roundup_Function() {
    var A = Math.round(4.7)
    var B = Math.round(4.4)
    document.getElementById("Round").innerHTML = "4.7 rounds to: " + A + " and 4.4 rounds to: " + B;
}
// Math.round(x) rounds the number to the nearest integer