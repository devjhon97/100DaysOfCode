function rgbToHex(rgb){
    let table = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let values = rgb.match(/\d+/g).map(Number);
    let output = '#';

    for(let value of values){
        let res = Math.floor(value/table.length);
        let sob = value % table.length;

        output += table[res]+table[sob];
    }

    return output;
}

module.exports = rgbToHex;