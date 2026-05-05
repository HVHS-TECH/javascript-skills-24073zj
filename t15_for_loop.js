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

    /*for(let i = 0; i < amount; i++)
    {
        let n = i;
        OUTPUT.innerHTML += n + " bottles of milk on the wall, ";
        OUTPUT.innerHTML += n + " bottles of milk. ";
        OUTPUT.innerHTML += "Take one down, pass it around, ";
        OUTPUT.innerHTML += (n - 1) + " bottles of milk on the wall.<br>";
    }*/
    for(let i = 0; i < amount; i++)
    {
        let n = -i;
        OUTPUT.innerHTML += n + " bottles of milk on the wall, ";
        OUTPUT.innerHTML += n + " bottles of milk. ";
        OUTPUT.innerHTML += "Take one down, pass it around, ";
        OUTPUT.innerHTML += (n - 1) + " bottles of milk on the wall.<br>";
    }
    
}