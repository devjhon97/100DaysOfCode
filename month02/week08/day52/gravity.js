function switchGravityOn(arr){
    
    for(let i in arr){
        for(let ind in arr[i]){
            if(arr[Number(i)][Number(ind)] === "#"){

                for(let index = Number(i)+1 ; index < arr.length; index++){
                    if(arr[index][Number(ind)] === '-'){
                        arr[Number(i)][Number(ind)] = '-';
                        arr[index][Number(ind)] = '#';
                        break;
                    }
                }
            }
        }
    }

    return arr;
}

module.exports = switchGravityOn;