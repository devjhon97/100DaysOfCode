function identicalFilter(values){
    let newStr = new Set();
    let arr = [];

    values.map(value => {
        for(let i = 0 ; i < value.length; i++){
            newStr.add(value[i]);
        }
        if(newStr.size === 1){
            arr.push(value);
        }
        newStr.clear();
    })

    return arr;
}

module.exports = identicalFilter;