function asteroids(arr){
    
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < 0 && arr[i-1] > 0){
            if(Math.abs(arr[i]) === Math.abs(arr[i-1])) arr.splice(i-1,2);
            else Math.abs(arr[i]) > Math.abs(arr[i-1]) ? arr.splice(i-1,1) : arr.splice(i,1);
            i = 0;
        }
    }

    return arr;
}

module.exports = asteroids;