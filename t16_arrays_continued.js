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
    if(ITEMFIELD.value != undefined){
        shoppingList.push(ITEMFIELD.value);
    }
}
function showList(){
    OUTPUT.innerHTML = shoppingList;
}