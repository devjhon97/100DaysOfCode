function toHex(str){
    let table = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let letters = str.split('');
    let hex = '';

    for(let value of letters){
        hex += table[Math.floor(value.charCodeAt()/16)];
        hex += `${table[value.charCodeAt() % 16]} `;
    }

    return hex;
}

module.exports = toHex;