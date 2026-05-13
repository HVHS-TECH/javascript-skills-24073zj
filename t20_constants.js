/****************************
task 20 Constants
****************************/

const NAME_FIELD = document.getElementById("nameField");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var firstTime = true;
var userName = ""

function getFormInput(){
    if(firstTime){ // display "running" message only once
        console.log("Running t20_constants.js");
        firstTime = false;
    }
    if(isNameValid){
        userName = NAME_FIELD.value.trim();
        OUTPUT.innerHTML = "Hello " + userName + ".<br>"
    }else{
        OUTPUT.innerHTML = "Please enter a valid name.<br>"
    }
}
function isNameValid(_name){
    if(_name.value.trim().length >= 3){ // handles blank case and too short case
        return true;
    }else{
        return false;
    }
}