function rainTrapper(arr){
    var biggestNum = 0;
    var water = 0;
    var bucket = 0;
    for(let ind in arr){
        if(arr[ind] > biggestNum){
            biggestNum = arr[ind];
        } 
    }

    let index = 1;
    while(index <= biggestNum){
        for(let ind = 0;ind < arr.length ;ind++){
            if(arr[ind] >= index){
                let currentIndex = Number(ind)+1;
                for(currentIndex; currentIndex<arr.length; currentIndex++){
                    if(arr[currentIndex] < index){
                        if(arr[Number(currentIndex)+1] === undefined){
                            bucket = 0;
                            break
                        }else{
                            bucket++;
                        }
                        continue;
                    }else{
                        ind = Number(currentIndex)-1;
                        water += bucket;
                        bucket = 0;
                        break;
                    }
                }
            }
        }
        index++;
    }
    return water;
}

module.exports = rainTrapper;