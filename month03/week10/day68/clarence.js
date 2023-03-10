function Clarence(ip){
    let table = [['1','2','3'],['4','5','6'],['7','8','9'],['.','0']];
    let cm = 0;
    let pos = [];

    for(let i = 0; i < ip.length; i++){
        
        for(let x = 0; x < table.length; x++){

            if(table[x].includes(ip[i])){
                let y = table[x].indexOf(ip[i]);

                if(i > 0){
                    if(x === pos[0]) cm += Math.abs(y-pos[1]);
                    else if(y === pos[1]) cm += Math.abs(x-pos[0]);
                    else if(Math.abs(x-pos[0]) === 1 && Math.abs(y-pos[1]) === 1) cm += Math.sqrt(2);
                    else if(Math.abs(x-pos[0]) === 2 && Math.abs(y-pos[1]) === 1 || Math.abs(x-pos[0]) === 1 && Math.abs(y-pos[1]) === 2) cm += Math.sqrt(5);
                    else if(Math.abs(x-pos[0]) === 2 && Math.abs(y-pos[1]) === 2) cm += Math.sqrt(8);
                    else if(Math.abs(x-pos[0]) === 1 && Math.abs(y-pos[1]) === 3 || Math.abs(x-pos[0]) === 3 && Math.abs(y-pos[1]) === 1) cm += Math.sqrt(10);
                    else if(Math.abs(x-pos[0]) === 2 && Math.abs(y-pos[1]) === 3 || Math.abs(x-pos[0]) === 3 && Math.abs(y-pos[1]) === 2) cm += Math.sqrt(13);

                    pos.splice(0);
                    pos.push(x, y);
                }else pos.push(x, y);
                break;
            }
        }
    }

    return Number(cm.toFixed(2));
}

module.exports = Clarence;