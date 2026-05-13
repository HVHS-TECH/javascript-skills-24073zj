/****************************
task 19 String Handling
****************************/

const NAMEFIELD = document.getElementById("nameField");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var firstTime = true;
var username = ""

function getFormInput(){
    if(firstTime){ // diplay "running" message only once
        console.log("Running t19_string_handling.js");
        firstTime = false;
    }
    if(NAMEFIELD.value != "" && NAMEFIELD.value.trim().length >= 3){
        username = NAMEFIELD.value.trim();
        OUTPUT.innerHTML = "Hello " + username + ".<br>"
    }else{
        OUTPUT.innerHTML = "Please enter a valid name.<br>"
    }
}