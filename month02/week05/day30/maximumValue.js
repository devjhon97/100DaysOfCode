function maximumValue(n,digit){
    let num = n.toString().replace('-','');
    let res = [];

    for(let index = 0; index <= num.length; index++){
        let sub = '';
        if(n < 0) sub += '-';
        for(let i = 0; i <= num.length; i++){
            if(res.length === i){
                res.push(sub);
                res[i] += digit.toString();
                res[i] += num.substring(i);
                res[i] = Number(res[i])
                break;
            }   
            if(!res[index]){
                sub += num[i];
                continue;
            }
            res += num[i];
        }
    }

    return res.sort((a,b) => b-a)[0];
}

module.exports = maximumValue;