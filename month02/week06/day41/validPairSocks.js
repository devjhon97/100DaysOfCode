function pairOfSocks(arr){
    arr.sort();
    let pairs = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[i+1]){
            pairs++;
            i++;
        }
    }

    return pairs;
}

module.exports = pairOfSocks;