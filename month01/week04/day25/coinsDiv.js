function coinsDiv(arr){
    var res = arr.reduce((inc,value) => inc+value);
    if(res % 3 !== 0) return false;
    
    let amount = res/3;
    arr.sort((a,b) => b-a);
    
    for(let index in arr){
        if(arr[index] > amount) return false;
    }

    return true;
}

module.exports = coinsDiv;