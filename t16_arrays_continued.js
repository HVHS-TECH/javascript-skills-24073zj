/****************************
task 16 Arrays Continued
****************************/

const AMOUNTFIELD = document.getElementById("amountField");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var amount = 0;

function getFormInput(){
    console.log("Running t16_arrays_continued.js");

    amount = AMOUNTFIELD.value;

    OUTPUT.innerHTML = "Writing song starting at: " + amount + ".<br>";

    for(let i = amount; i > 0; i--)
    {
        let n = i;
        if(n == 1){
            OUTPUT.innerHTML += "1 bottle of milk on the wall, "+"1 bottle of milk. ";
            OUTPUT.innerHTML += "Take it down, pass it around, "+"no more bottles of milk on the wall.<br><br>";
        }else{
            OUTPUT.innerHTML += n + " bottles of milk on the wall, " + n + " bottles of milk. ";
            OUTPUT.innerHTML += "Take one down, pass it around, " + (n - 1) + " bottles of milk on the wall.<br>";
        }
    }
    
}