/****************************
task 10 Input from HTML
****************************/

const INPUT_FIELD = document.getElementById("nameField");
var username = INPUT_FIELD.value;

var OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function start(){
    console.log("Running t10_input_from_HTML.js");
    
    OUTPUT.innerHTML = `Welcome to the page ${username}`;
}