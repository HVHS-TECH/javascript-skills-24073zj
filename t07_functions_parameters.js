/****************************
task 7 Functions with Parameters
****************************/

var OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function displayProduct(_name, _price){
    OUTPUT.innerHTML += `${_name}: $${_price}<br>`;
}

console.log("Running t07_functions_parameters.js");

// clear output box
OUTPUT.innerHTML = "";

displayProduct("Chocolate bar", 4);
displayProduct("Chips", 3);
displayProduct("Drink", "2.50");