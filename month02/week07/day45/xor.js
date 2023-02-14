function XOR(x, y){
    x = x^y;
    y = x^y;
    let res = x^y;
    return res-y;
}

module.exports = XOR;