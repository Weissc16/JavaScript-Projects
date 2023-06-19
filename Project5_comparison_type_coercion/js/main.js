document.write("10" + 5);
document.write(typeof "Word!");
document.write(typeof 5);

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0
}//This is a NaN outcome because you cannot divide 0 by 0.

function true_Function() {
    document.getElementById("True").innerHTML = isNaN('This is a string');
}//This is Not A Number function and is a True outcome

function false_Function() {
    document.getElementById("False").innerHTML = isNaN(0157)
} //This is Not A Number function and is a Falst outcome

document.write(2E310);
//this is positive infinity

document.write(-3E315);
//this is negative infinity

document.write(10 > 2);
//Boolean operator returning True

document.write(2 > 10);
//Boolean operator returning False

console.log(2 + 2);
//console.log method showing 4

console.log(10 < 2);
//console.log method showing false

document.write((10 + 6) == 16);
//boolean logic comparing 2 numbers.  outcome is true

document.write((10 + 2) == 16);
//Boolean logic comparing 2 numbers.  outcome is false

X = 10;
Y = 10;
document.write(X === Y);
// triple equals sigh (===) is comparing both values and making sure they are the same type of data.

A = 10;
B = "18";
document.write( A === B);

C = 9;
D = "9";
document.write(C === D);

E = 11;
F = 12;
document.write(E === F);

document.write(5 > 2 && 10 > 7);
//Boolean AND (&&) sign is true if both statments are true

document.write(5 < 10 || 10 > 10);
//Boolean OR (||) sign is true if one or both statements are true

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}
//NOT opperator (!) is true if the statement is false

function not2_Function() {
    document.getElementById("not").innerHTML = !(5 > 10);
}

