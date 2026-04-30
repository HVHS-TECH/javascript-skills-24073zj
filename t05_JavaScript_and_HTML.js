/****************************
task 5 JavaScript and Html
****************************/

var username = "Zac";
var age = 16;
var pocketMoney = 20;
var year = 2026;
var OUTPUT = document.getElementById("spaceForJavaScriptOutput");

console.log("Running t05_JavaScript_and_HTML.js");

OUTPUT.innerHTML = `Hi ${username}<br>`;
OUTPUT.innerHTML += `As of ${year} you are ${age} years old<br>`;
OUTPUT.innerHTML += `You were born in ${year - age}<br>`;
OUTPUT.innerHTML += `In 10 years you will be ${age + 10} years old<br>`;
OUTPUT.innerHTML += `You have ${pocketMoney} dollars<br>`;
OUTPUT.innerHTML += `You spend half of your money, now you have ${pocketMoney / 2} dollars<br>`;
OUTPUT.innerHTML += `Then you get $3, now you have ${(pocketMoney / 2) + 3}<br>`;