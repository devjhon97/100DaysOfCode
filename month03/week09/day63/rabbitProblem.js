function rabbitProblem(m, f, t){
    let month = 0;
    let rabbits = new Array(96).fill([0, 0]);
    rabbits[2] = [m, f];
    let total = 0;
    
    while(total < t){    
        let newBorns = 0;

        for(let i = 4; i < rabbits.length; i++){
            newBorns += rabbits[i][1];
        }

        rabbits.unshift([newBorns*5, newBorns*9]);
        rabbits.pop();

        total = rabbits.reduce((prev, value) => prev+value[0]+value[1], 0);
        month++;
    }

    return month;
}

console.log(rabbitProblem(2, 4, 1000000000)) // => 32
console.log(rabbitProblem(2, 4, 15000000000)) // => 36
console.log(rabbitProblem(1, 1, 70000000000)) // => 41