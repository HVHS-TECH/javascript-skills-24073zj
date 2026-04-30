/****************************
task 10 Input from HTML
****************************/

var OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function displayProduct(_name, _price){
    OUTPUT.innerHTML += `${_name}: $${_price}<br>`;
}

function start(){
    console.log("Running t10_input_from_HTML.js");

    // clear output box
    OUTPUT.innerHTML = "";

    displayProduct("Chocolate bar", 4);
    displayProduct("Chips", 3);
    displayProduct("Drink", "2.50");
}