/****************************
task 18 Validation
****************************/

const SHOPPINGFORM = document.getElementById("shoppingForm");
const ITEMFIELD = document.getElementById("itemField");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var shoppingList = [];

var firstTime = true;

function getFormInput(){
    if(firstTime){ // diplay "running" message only once
        console.log("Running t18_validation.js");
        firstTime = false;
    }
    if(ITEMFIELD.value != "" && SHOPPINGFORM.checkValidity() === true){
        shoppingList.push(ITEMFIELD.value);
        ITEMFIELD.value = "";
        OUTPUT.innerHTML = "You have added " + shoppingList[shoppingList.length - 1] +" to the list";
    }
}
function showList(){
    OUTPUT.innerHTML = "You have added " + shoppingList[shoppingList.length - 1] +" to the list";
    OUTPUT.innerHTML += "<ul>";
    OUTPUT.innerHTML += "These are the items on your shopping list:";

    for (let i = 0; i < shoppingList.length; i++) {
        OUTPUT.innerHTML += `<li style="margin-left: 20px;">` + shoppingList[i] + "</li>";
    }

    OUTPUT.innerHTML += "</ul>";
}