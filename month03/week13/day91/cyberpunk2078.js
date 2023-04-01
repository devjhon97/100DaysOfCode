const rl = require("readline-sync");
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function leftMonths(month, k){
    let numMonth = months.indexOf(month);

    while(k > 0){
        months.push(months[0]);
        months.shift();
        k--;
    }
    month = months[numMonth];
    return month;
}

let month = String();
let k = Number();
while(!months.includes(month)){
    month = rl.question("Qual mês Vasya está neste momento? -> ");
    month = month.charAt(0).toUpperCase() + month.substring(1);   
}
while(!k || k < 0 || k > 100) k = rl.questionInt("Quantos meses faltam? -> ");
console.log(leftMonths(month, k));
