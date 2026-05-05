/****************************
task 15 For Loop
****************************/

const AMOUNTFIELD = document.getElementById("amountField");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var amount = 0;

function getFormInput(){
    console.log("Running t15_for_loop.js");

    amount = AMOUNTFIELD.value;

    OUTPUT.innerHTML = "Writing song starting at: " + amount + ".<br>";

    for(var i = amount; i <= 0; i--)
    {
        OUTPUT.innerHTML += i + " bottles of milk on the wall,";
        OUTPUT.innerHTML += i + " bottles of milk.<br>";
        OUTPUT.innerHTML += "Take one down, pass it around,<br>";
        OUTPUT.innerHTML += (i - 1) + " bottles of milk on the wall.";
        console.log(i);
    }
    
}