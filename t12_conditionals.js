/****************************
task 12 Conditionals
****************************/

const NAMEFIELD = document.getElementById("nameField");
const AGEFIELD = document.getElementById("ageField");
const MONEYFIELD = document.getElementById("moneyField");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var username = "";
var userage = 0;
var usermoney = 0;

function getFormInput(){
    console.log("Running t12_conditionals.js");

    username = NAMEFIELD.value;
    userage = Number(AGEFIELD.value);
    usermoney = Number(MONEYFIELD.value);

    OUTPUT.innerHTML = "Welcome to the page " + username + ".<br>";
    OUTPUT.innerHTML += "You are " + userage + " years old.<br>";
    OUTPUT.innerHTML += "You have $" + usermoney + ".<br>";
    if(usermoney >= 4){
        OUTPUT.innerHTML += "A chocolate bar costs $4. You CAN afford a chocolate bar";
    }
    else{
        OUTPUT.innerHTML += "A chocolate bar costs $4. Sorry you CAN'T afford a chocolate bar";
    }
}