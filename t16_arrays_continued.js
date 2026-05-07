/****************************
task 16 Arrays Continued
****************************/

const ITEMFIELD = document.getElementById("itemField");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var shoppingList = [];

var firstTime = true;

function getFormInput(){
    if(firstTime){
        console.log("Running t16_arrays_continued.js");
        firstTime = false;
    }
    if(ITEMFIELD.value != ""){
        shoppingList.push(ITEMFIELD.value);
        ITEMFIELD.value = "";
    }

    OUTPUT.innerHTML = "You have added " + shoppingList[shoppingList.length - 1] +" to the list";
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