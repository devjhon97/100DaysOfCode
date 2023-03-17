function maxDuffelBagValue(cakes, capacity){
    let value = 0;

    while(capacity > 0){
        let prop;
        let index = 0;

        for(let i = 0; i < cakes.length; i++){
            if(capacity-cakes[i][0] >= 0){
                let rel = Math.round(cakes[i][1]/cakes[i][0]);
                if(!prop || rel > prop){
                    prop = rel;
                    index = i;
                }
            }
        }

        if(prop){
            value += cakes[index][1];
            capacity -= cakes[index][0];
        }else break;
    }

    return value;
}

console.log(maxDuffelBagValue([[7, 160], [3, 90], [2, 15]], 20)); // 555
console.log(maxDuffelBagValue([[4, 120], [2, 50], [3, 35]], 10)); // 290
console.log(maxDuffelBagValue([[5, 75], [8, 150], [4, 25], [6, 100]], 25)); // 450