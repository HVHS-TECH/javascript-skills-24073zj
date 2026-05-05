/****************************
task 11 Data Types
****************************/

const NAMEFIELD = document.getElementById("nameField");
const AGEFIELD = document.getElementById("ageField");
const MONEYFIELD = document.getElementById("moneyField");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var username = "";
var userage = 0;
var usermoney = 0;

function getFormInput(){
    console.log("Running t11_data_types.js");

    username = NAMEFIELD.value;
    userage = Number(AGEFIELD.value);
    usermoney = Number(MONEYFIELD.value);

    OUTPUT.innerHTML = "Welcome to the page " + username + ".<br>";
    OUTPUT.innerHTML += "You are " + userage + " years old.<br>";
    OUTPUT.innerHTML += "You have $" + usermoney + ".<br>";
}