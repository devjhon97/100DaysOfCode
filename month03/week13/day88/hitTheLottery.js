function hitTheLottery(money){
    let bills = 0;
    let dollars = [100, 20, 10, 5, 1];

    while(money !== 0){
        
        for(let i = 0; i < dollars.length; i++){
            if(money >= dollars[i]){
                money -= dollars[i];
                bills++;
                break
            }
        }
    }

    return bills;
}

module.exports = hitTheLottery;