function balanced_bonus(str){
    let hash = {};

    for(let i = 0; i < str.length; i++){
        hash[str[i]] = hash[str[i]] ? hash[str[i]] += 1 : 1;
    }

    let values = new Set(Object.values(hash));

    if(values.size <= 1) return true;
    else return false;
}

module.exports = balanced_bonus;