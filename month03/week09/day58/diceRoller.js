function diceRoller(arr){
    let output = '';
    let values = [];

    for(let i in arr){
        arr[i] = arr[i].replace('d','-');
        values.push(arr[i].split(/[-]/));
    }

    for(let round of values){
        let play = Number(round[0]);
        let dice = Number(round[1]);
        let res = [];

        while(play > 0){
            res.push(Math.floor(Math.random()*dice+1));
            play--;
        }

        let total = res.reduce((prev,value) => prev+value,0);
        let info = res.reduce((prev,value) => prev.toString()+' '+value.toString(),'');
        output += `${total}: ${info}\n`;
    }

    return output;
}

console.log(diceRoller(["3d6", "4d12", "1d10", "5d4"]));