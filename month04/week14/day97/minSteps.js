const rl = require("readline-sync");

function minSteps(x){
    let steps = x%5 === 0 ? x/5 : Math.floor(x/5)+1;
    return "O mínimo de passos que o Elefante dará para chegar na casa do amigo é: "+steps;
}

let x = 0;
while(x <= 0 || x > 1000000) x = rl.questionInt("Posição do amigo do elefante: ");

console.log(minSteps(x));