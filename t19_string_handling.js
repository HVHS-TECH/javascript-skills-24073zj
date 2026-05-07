/****************************
task 19 String Handling
****************************/

const SHOPPINGFORM = document.getElementById("shoppingForm");
const ITEMFIELD = document.getElementById("itemField");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var shoppingList = [];

var firstTime = true;

function getFormInput(){
    if(firstTime){ // diplay "running" message only once
        console.log("Running t19_string_handling.js");
        firstTime = false;
    }
    if(SHOPPINGFORM.checkValidity() === true && ITEMFIELD.value != "" && Number.isNaN(Number(ITEMFIELD.value))){
        shoppingList.push(ITEMFIELD.value);
        ITEMFIELD.value = "";
        OUTPUT.innerHTML = "You have added " + shoppingList[shoppingList.length - 1] +" to the list";
    }else{
        OUTPUT.innerHTML = "Please enter the item name correctly";
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