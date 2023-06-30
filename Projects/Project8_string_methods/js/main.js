function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
//using the concatenate method, we put all 4 of these variables together to create a sentence.

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
//using the slice method to cut characters 27 through 33 to display.  (Johnny)

var text = "Hello World!";
var result = text.toUpperCase();
document.getElementById("upper").innerHTML = result;
//the toUpperCase() method makes the statement capitalized

var word = "How do you do, sir?"
var position = word.search("you");
document.getElementById("search").innerHTML = position;
//the .search() method tells you the first index (position) of the matched word.

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
// the toString() Method converts a number into a string.

function precision_Method() {
    var X = 12938.30193202289321;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
// toPercision() cuts down the number to a specified number of decimal places

function fixed_Method() {
    var X = 5.6678495
    document.getElementById("Fixed").innerHTML = X.toFixed(3);
}
//the toFixed() method converts a number to a string and cuts it down to (x) amount of decimal places

function value_Method() {
    var animals = ["Dogs", "Cats", "Monkeys", "Birds", "Horse"];
    var Value = animals.valueOf();
    document.getElementById("Value").innerHTML = Value;
}
// the valueOf() Method returns the array itself.