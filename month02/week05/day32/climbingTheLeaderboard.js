function playerRank(ranked,player){
    let top = new Set();
    let arr = [];
    let res = [];

    for(let value of ranked){
        top.add(value);
    }

    for(let value of top){
        arr.push(value);
    }
    for(let value of player){
        arr.push(value);
        arr.sort((a,b)=> b-a);
        res.push(arr.indexOf(value)+1);
        arr.splice(arr.indexOf(value),1);
    }
    return res;
}

module.exports = playerRank;