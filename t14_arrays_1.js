/****************************
task 14 Arrays #1
****************************/

const NAMEFIELD = document.getElementById("nameField");
const AGEFIELD = document.getElementById("ageField");
const MONEYFIELD = document.getElementById("moneyField");
const CHOCFIELD = document.getElementById("chocField");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var username = "";
var userage = 0.0;
var usermoney = 0.0;
var chocScore = 0;

var chocMessages = [
    "You loath chocolate.",
    "You think chocolate is meh.",
    "You think hocolate is pretty good.",
    "You think chocolate is the best thing EVER!!!!."
]

function calculateChange(_money, _price)
{
    return _money - _price;
}

function getFormInput(){
    console.log("Running t14_arrays_1.js");

    username = NAMEFIELD.value;
    userage = Number(AGEFIELD.value);
    usermoney = Number(MONEYFIELD.value);
    chocScore = Number(CHOCFIELD.value);

    var moneyFormat = usermoney.toLocaleString("en-US", { style: "currency", currency: "USD"});
    var change = calculateChange(usermoney, 4.0);
    var formatChange = change.toLocaleString("en-US", { style: "currency", currency: "USD"});

    OUTPUT.innerHTML = "Welcome to the page " + username + ".<br>";
    OUTPUT.innerHTML += "You are " + userage + " years old.<br>";
    OUTPUT.innerHTML += "You have " + moneyFormat + ".<br>";
    if(usermoney >= 4){
        OUTPUT.innerHTML += "A chocolate bar costs $4.00. You CAN afford a chocolate bar.<br>";
        OUTPUT.innerHTML += ("You will get " + formatChange + " change.<br>");
    }
    else{
        OUTPUT.innerHTML += "A chocolate bar costs $4.00. Sorry you CAN'T afford a chocolate bar.<br>";
    }
    OUTPUT.innerHTML += chocMessages[chocScore] + "<br>";
    
}