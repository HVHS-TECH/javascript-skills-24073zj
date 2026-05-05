/****************************
task 10 Input from HTML
****************************/

const INPUT_FIELD = document.getElementById("nameField");
var username = "";

var OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function getFormInput(){
    console.log("Running t10_input_from_HTML.js");

    username = INPUT_FIELD.value;

    OUTPUT.innerHTML = "Welcome to the page " + username + ".";
}