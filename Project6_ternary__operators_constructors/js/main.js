function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function vote_Function() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
//"this" function defines this specific Object of the class "Vehicle"

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML= "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
//"new" function creates a new object for the class "Vehicle"

function Animal(Species, Age, Color, Type) {
    this.Animal_Species = Species;
    this.Animal_Age = Age;
    this.Animal_Color = Color;
    this.Animal_Type = Type;
}
//Object Constructor

var Jax = new Animal("Dog", 2, "White", "Golden Retriever");
var Slithern = new Animal("Snake", 15, "Yellow", "Boa");
var Buster = new Animal("Rabbit", 5, "Black and White", "Jack");
function animal_Function() {
    document.getElementById("New_and_This").innerHTML= "Buster is a " + Buster.Animal_Color + " " + Buster.Animal_Species + ".";
}


var Fun = "var";
    document.write(Fun + " times");


function nest_Function() {
    document.getElementById("Nested").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_One() {Starting_point += 1;}
        Plus_One();
        return Starting_point;
    }
}
//nested function of "Plus_One()".  This function is called on when the Count Function is used.