/****************************
task 9 Activate via Button
****************************/

var OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function displayProduct(_name, _price){
    OUTPUT.innerHTML += `${_name}: $${_price}<br>`;
}

function start(){
    console.log("Running t09_activate_via_button.js");

    // clear output box
    OUTPUT.innerHTML = "";

    displayProduct("Chocolate bar", 4);
    displayProduct("Chips", 3);
    displayProduct("Drink", "2.50");
}