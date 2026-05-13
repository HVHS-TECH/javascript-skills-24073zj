/****************************
task 21 Objects
****************************/

const NAME_FIELD = document.getElementById("nameField");
const AGE_FIELD = document.getElementById("ageField");
const MONEY_FIELD = document.getElementById("moneyField");
const FAV_CHOC_FIELD = document.getElementById("favChocField");

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

var firstTime = true;

var userList = [];

function getFormInput(){
    if(firstTime){ // display "running" message only once
        console.log("Running t21_objects.js");
        firstTime = false;
    }

    let user = {
        name: "",
        age: 0,
        money: 0,
        favChoc: ""
    }

    if(isNameValid){
        user.name = NAME_FIELD.value.trim();
        OUTPUT.innerHTML = "Entering " + user.name + " into the system.<br>"
    }
    else{OUTPUT.innerHTML = "Please enter a valid name.<br>"}
    user.age = AGE_FIELD.value;
    user.money = MONEY_FIELD.value;
    user.favChoc = FAV_CHOC_FIELD.value;

    userList.push(user);

    NAME_FIELD.value = "";
    AGE_FIELD.value = "";
    MONEY_FIELD.value = "";
    FAV_CHOC_FIELD.value = "";
}

function isNameValid(_name){
    if(_name.value.trim().length >= 3){ // handles blank case and too short case
        return true;
    }else{
        return false;
    }
}

function welcomeUsers(){
    OUTPUT.innerHTML = "";
    for (let i = 0; i < userList.length; i++) {
        OUTPUT.innerHTML += "Welcome " + userList[i].name + ".<br>";
        OUTPUT.innerHTML += "Age: " + userList[i].age + ".<br>";
        OUTPUT.innerHTML += "Money: " + userList[i].money + ".<br>";
        OUTPUT.innerHTML += "Favorite chocolate: " + userList[i].favChoc + ".<br><br>";
    }
}