function MinTurns(current,target){    
    let arr = [...current,...target].map(value => typeof value !== Number ? Number(value) : value);
    let res = 0;

    while(arr.length > 0){
        if(Math.abs(arr[0]-arr[arr.length/2]) > 5){
            if(arr[0] > arr[arr.length/2]){
                arr[arr.length/2] += 10;  
            }else{
                arr[0] += 10;
            }
        }
        res += Math.abs(arr[0]-arr[arr.length/2]);
        arr.splice(arr.length/2,1);
        arr.shift();
    }
    return res;
}

module.exports = MinTurns;