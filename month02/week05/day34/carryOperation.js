function carryOperation(n1,n2){
    let carry = 0;
    let value = n1 > n2 ? n1 : n2;
    let res = [String(n1+n2),String(value)];

    for(let index = value.toString().length-1; index >= 0; index--){
        if(res[0][index] && res[1][index]){
            if(Number(res[0][index]) < Number(res[1][index])) carry++;
        }
    }

    return carry;
}

module.exports = carryOperation;