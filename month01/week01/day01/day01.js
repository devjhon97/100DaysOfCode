const readline = require("readline-sync")

function ageInDays(){
    var age = readline.question("what's your age?");
    var days = age*365

    console.log(days);
}

ageInDays();