function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String; 
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}
//uses the switch element to create actions for each object in a list
//uses the case element to set the conditions of each object in the list
//uses the default element to set the output if nothing or the wrong thing is entered
//uses the break element to end each case

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}
//Use of the getElemenetsByClassName method
//Assigned the variable A to any class that is named "Click"
//Set index of A to 0 (A[0]), so it will target the first class with the name "Click"






var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");

//Create Gradient
var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0, "red");
grd.addColorStop(1,"white");

//Fill with Gradient
ctx.fillStyle= grd;
ctx.fillRect(10,10,150,80);
//top left corner position 10,10; width 150; height 80

//Create String and font
ctx.font = "30px Arial";
ctx.strokeText("Hello World!",10,50);

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(20, 100);
ctx.lineTo(70,100);
ctx.lineTo(80,20);
ctx.stroke();
//Begin a Path (beginPath())
//Move to a Point (moveTo())
//Draw in the Path, draw to another point (lineTo())
//Draw the path, execute - (stroke())