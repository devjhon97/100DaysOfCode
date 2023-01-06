const readline = require("readline-sync");

function prime(currentnum){

    let index;
    
    if(currentnum == 1){
        index = currentnum;
    }else{
        index = currentnum-1;
    }

    for(index ;index > 1; index--){
        if(Number.isInteger(currentnum/index)){
            break;
        }
    }
    if(index > 1){
        prime(Number(currentnum)+1);
    }else{
        if(currentnum !== num){
            console.log(`O ${num} nao é primo , o numero próximo dele primo é o ${currentnum}`);
        }else{
            console.log(`O ${num} é um numero primo`);
        }
    }
}

var num = readline.question('Digite um numero: ');
prime(num);