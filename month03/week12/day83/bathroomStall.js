const rl = require("readline-sync");

function bathroomStall(T, S, K){
    let test = 1;
    let log = String();

    for(let index = 0; index < T; index++){
        if(S[index] === K[index]){
            log += `Case #${test}: 0, 0\n`;
            continue
        }

        let stalls = Array.from({length: S[index]});
        stalls.unshift('G');
        stalls.push('G');
    
        while(K[index] > 0) {
            let selectedStall = 0;
            let farthest = 0;
            let GSL = 0;
            let GSR = 0;
        
            for(let i = 1; i < stalls.length-1; i++){
                if(stalls[i] === undefined){
                    let SL = 0;
                    let SR = 0;
                    let leftStalls = stalls.slice(0, i).reverse();
                    let rightStalls = stalls.slice(i+1);
            
                    for(value of leftStalls){
                        if(value === undefined) SL++;
                        else break
                    }
            
                    for(value of rightStalls){
                        if(value === undefined) SR++;
                        else break
                    }
            
                    if(SL+SR > farthest){
                        farthest = SL+SR;
                        GSL = SL;
                        GSR = SR;
                        selectedStall = i;
                    }else if(SL+SR === farthest){
                        if(GSL+1 === SL && GSR-1 === SR && SL <= SR){
                            GSL = SL;
                            GSR = SR;
                            selectedStall = i;
                        }
                    }
                }
            }
    
            stalls[selectedStall] = 'K';
            if(K[index] === 1) log += `Case #${test}: ${GSR}, ${GSL}\n`;
            K[index]--;
        }

        test++;
    }
    
    return log;
}

function inputs(){
    let test = 0
    let stall = []; 
    let people = [];

    while(test <= 0 || test > 100) test = rl.questionInt('Quantos testes deseja fazer? ');
    console.log('\n');

    for(let i = 0; i < test; i++){
        let S = P = 0;
        while(S <= 0 || S > 1018) S = rl.questionInt(`Quantas cabines tem no teste ${i+1}? `);
        while(P <= 0 || P > S) P = rl.questionInt(`Quantas pessoas estão na fila do banheiro no teste ${i+1}? `);
        console.log('\n');
        stall.push(S);
        people.push(P);
    }
    return bathroomStall(test, stall, people); 
}

console.log(inputs());