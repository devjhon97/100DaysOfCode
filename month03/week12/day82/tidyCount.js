const rl = require('readline-sync');

function tidyCount(t, nums){
    let log = String();

    for(let num of nums){
        let count = 0;
        let tidyNumber = Number();

        while(count != num){
            count++;
            let strnum = String(count);

            for(let i = 0; i < strnum.length; i++){
                if(i == 0){
                    if(strnum.length == 1){
                        tidyNumber = count;
                        break
                    }else continue
                }

                if(Number(strnum.charAt(i)) >= Number(strnum.charAt(i-1))){
                    if(i+1 == strnum.length) tidyNumber = count;
                    else continue
                }else break
            }
        }

        log += `Case #${t}: ${tidyNumber}\n`;
        t++;
    }

    return log;
}

async function inputData(){
    let tests = 0;
    while(tests <= 0 || tests > 100) tests = rl.questionInt('Quantos testes você deseja fazer? ');
    const values = new Array();

    for(let i = 1; i <= tests; i++){
        let value = 0;
        while(value <= 0 || value > 1018) value = await rl.questionInt(`Digite o valor do teste ${i}: `);
        values.push(value);
    } 

    console.log(tidyCount(1, values));
}

inputData();