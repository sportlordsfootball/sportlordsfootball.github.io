function mygame() {
var points = 0;
  
 alert("Lets play a fun quiz!");

 var askname=prompt("First of all, what your name?");
alert("Hi! " + askname);

var quiz = prompt("A little girl kicks a football. It goes 10 feet and comes back to her. How is this possible?");
if (quiz === "she kicked it up")
  {
    alert("Correct! Onto the next question!");
    var points = points + 1;
    alert("You scored " + points + " points.")
  }
else
  {
    alert("Incorrect!The answer is she kicked it up"); 
  }
var quiz2 = prompt("A is the father of B. But B is not the son of A. Why is that?");
if (quiz2 === "because b is the daughter")
{
    alert("Correct! Onto the next question!");
    var points = points + 1;
    alert("You scored " + points + " points.");
}
else
{
    alert("Incorrect! The answer is because b is a daughter");
}

var quiz3 = prompt("A rooster laid a egg ontop of a barn roof. Which way did it roll?");
if (quiz3 === "roosters don't lay eggs")
{
    alert("Correct! Onto the next question!");
    var points = points + 1;
    alert("You scored " + points + " points.");
}
else
{
    alert("Incorrect! The answer is roosters don't lay eggs");
}
var quiz4 = prompt("What goes up and down and remains in the same place?");
if (quiz4 === "stairs")
{
    alert("Correct! Onto the next question!");
    var points = points + 1;
    alert("You scored " + points + " points.")
}
else
{
    alert("Incorrect! The answer is stairs");
}
var quiz5 = prompt("Uncle Sam's farm had a terrible storm. All but seven sheep were killed. How many sheep are still alive?");
switch(quiz5) {
    case "seven":
        alert("Correct! Onto the next question!");
        var points = points + 1;
    alert("You scored " + points + " points.");
        break;
    case "7":
        alert("Correct! Onto the next question!");
        var points = points + 1;
    alert("You scored " + points + " points.")
        break;
    default:
        alert("Incorrect! The answer is Seven or 7");
}    
var quiz6 = prompt("What 2 things can you never eat for breakfast?");
if (quiz6 === "lunch and dinner")
{
    alert("Correct! Onto the next question!");
    var points = points + 1;
    alert("You scored " + points + " points.")
}
else
{
    alert("Incorrect! The answer is lunch and dinner");
} 
var quiz7 = prompt("What is brown and sticky?");
if (quiz7 === "a stick")
{
    alert("Correct! Onto the next question!");
    var points = points + 1;
    alert("You scored " + points + " points.")
}
else
{
    alert("Incorrect! The answer is a stick");
}  
var quiz8 = prompt("What 2 words, when combined hold the most letters?");
if (quiz8 === "post office")
{
    alert("Correct! Onto the next question!");
    var points = points + 1;
    alert("You scored " + points + " points.")
}
else
{
    alert("Incorrect! The answer is a post office");
}
var quiz9 = prompt("How do you walk on water?");
if (quiz9 === "you freeze it first")
{
    alert("Correct! Onto the next question!");
    var points = points + 1;
    alert("You scored " + points + " points.")
}
else
{
    alert("Incorrect! The answer is you freeze it first");
}
alert("The last and final question to the quiz");
var quiz10 = prompt("How many sides does a circle have?");
if (quiz10 === "a inside and a outside")
{
    alert("Correct! That is it!");
    var points = points + 1;
    alert("You scored " + points + " points.")
}
else
{
    alert("Incorrect! Shame on you! The answer is a inside and a outside");
}

var points = points;
alert("Your total score is " + points + " points!");
alert("Thank you for playing my game!");
var rate=prompt("Can you please rate my quiz from 1-10?(1 worst, 10 highest)");
if(rate < 5)
  {
    alert("Cool!");
  }
    else
    {
    alert("Thank you!");
  }
}