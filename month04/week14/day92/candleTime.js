function candleTime(x, k){
    let hour = 0;

    while(x > 0){
        hour += x;
        x = Math.floor(x/k);
    }

    return hour;
}

module.exports = candleTime;