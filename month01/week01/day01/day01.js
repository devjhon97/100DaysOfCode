const readline = require("readline-sync")

function ageInDays(){
    var age = readline.question("what's your age?");
    if(age < 0){
        console.log('insert a valid age');
        ageInDays();
    }else{
        var days = age*365;
        console.log(days);
    }
}

ageInDays();