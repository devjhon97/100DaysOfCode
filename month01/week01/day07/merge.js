function merge(num1,num2){
    num1 = num1.filter(nm =>{
        return nm !== 0;
    });

    num1.push(...num2);
    num1.sort();
    return num1;
}

module.exports = merge;