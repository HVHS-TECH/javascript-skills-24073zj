/****************************
task 10 Input from HTML
****************************/

const INPUT_FIELD = document.getElementById("nameField");
let username = INPUT_FIELD.value;

var OUTPUT = document.getElementById("spaceForJavaScriptOutput");

function getFormInput(){
    console.log("Running t10_input_from_HTML.js");

    OUTPUT.innerHTML = "<p>Welcome to the page " + "a" + "</p>";
}