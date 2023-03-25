const rl = require("readline-sync");

function latinSquare(t, n, ls){
    let trace = ls.reduce((prev, arr, i) => prev + arr[i], 0);
    let row = 0;
    let column = 0;
    let square = String();
    
    ls.map(arr => {
        let values = new Set();

        arr.map((value, i) => {
            values.add(value);
            square = i+1 == arr.length ? square += `${value}\n` : square += `${value} `;
        })
        if(values.size !== arr.length) row++;
    })

    for(let i = 0; i < n; i++){
        let cmn = [];
        let values = new Set();

        ls.map(arr => cmn.push(arr[i]));
        cmn.map(value => values.add(value));
        if(values.size !== cmn.length) column++;
    }
    
    return `Test #${t}: ${trace} ${row} ${column}\n${square}`;
}

function inputLS(){
    let test = 0;
    let allSizes = [];
    let allMatrix = [];
    let tests = 1;
    
    while(test <= 0 || test > 100) test = rl.questionInt("Quantos testes deseja fazer? (1-100)");

    while(tests <= test){
        let size = 0;
        let matrix;
        while(size <= 1 || size > 100) size = rl.questionInt(`Qual tamanho da matriz do teste ${tests}? (2-100)`);

        matrix = Array.from({length: size}, ()=> []);

        matrix.forEach((arr, i) => {
            while(arr.length !== size){
                let value = rl.questionInt(`Digite o ${arr.length+1}° valor da coluna ${i+1}: `);
                if(value <= size) arr.push(value);
                else console.log("Não é permitido valor maior que o tamanho da matriz!");
            }
        })

        allSizes.push(size);
        allMatrix.push(matrix);
        console.log('\n');
        tests++;
    }

    for(let i = 0; i < allMatrix.length; i++) console.log(latinSquare(i+1, allSizes[i], allMatrix[i]));
}

inputLS();