const readline = require("readline-sync");

function letterCombination(){
    var digit1 = readline.question('Digite um numero: ');
    if(digit1 < 2 || digit1 > 9) {console.log('Número invalido!'); return;}

    var digit2 = readline.question('Digite outro nunero: ');
    if(digit2 < 2 || digit2 > 9) {console.log('Número invalido!'); return;}

    var index1 = digit1 == 7 || digit1 == 9 ? 4 : 3;
    var index2 = digit2 == 7 || digit2 == 9 ? 4 : 3;
    var inc1 = digit1-1 == 7  || digit1 == 9 ? 1 : 0;
    var inc2 = digit2-1 == 7  || digit2 == 9 ? 1 : 0;

    for(let f1 = 0; f1< index1; f1++){
        for(let f2 = 0; f2< index2; f2++){
            let l1 = String.fromCharCode(59+(digit1*3+inc1+f1));
            let l2 = String.fromCharCode(59+(digit2*3+inc2+f2));
            console.log(l1+'-'+l2);
        }
    }
}

letterCombination();