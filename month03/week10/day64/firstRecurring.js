function firstRecurring(str){
    let hash = {};
    let res;

    for(let i = 0; i < str.length; i++){
        hash[str[i]] = hash[str[i]] ? hash[str[i]] += 1 : 1;
        if(hash[str[i]] === 2){
            res = str[i];
            break
        }
    }

    return res;
}

module.exports = firstRecurring;