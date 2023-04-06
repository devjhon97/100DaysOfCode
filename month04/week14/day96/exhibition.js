const rl = require("readline-sync");

function maxHappy(beauty){
    beauty.sort((a, b) => a - b);

    let sortedArr = new Array();
    sortedArr.push(beauty[0]);
    beauty.shift();

    
    while(beauty.length > 0){
        let num = 1000;
        beauty.sort((a, b) => a - b);

        beauty.map(value => value > sortedArr[sortedArr.length-1] && value < num ? num = value : num = num);
        if(num === 1000) num = beauty[0];

        let index = beauty.indexOf(num);
        
        sortedArr.push(num);
        beauty.splice(index, 1);
    }

    let happy = 0;
    for(let i = 1; i < sortedArr.length; i++){
        if(sortedArr[i] > sortedArr[i-1]) happy++;
    }

    return `O máximo de vezes que o visitante vai ficar feliz é: ${happy}`;
}

function data(){
    let pictures = Number();
    let beauty = new Array();

    while(pictures <= 0 || pictures > 1000 || pictures === undefined) pictures = rl.questionInt("Número de pinturas: ");

    for(let i = 1; i <= pictures; i++){
        let value = Number();

        while(value <= 0 || value > 1000 || value === undefined) value = rl.questionInt(`Índice beleza da ${beauty.length+1}º pintura: `);
        beauty.push(value);
    }

    return maxHappy(beauty);
}

console.log(data());