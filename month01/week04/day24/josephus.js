function josephus(n,i){
    var circle = new Array(n).fill().map((_,i) => i+1);
    var index = ind = 1;

    while(circle.length > 1){
        if(ind % i == 0){
            circle.splice(index-1,1);
            ind = 1;
        }else{
            index++;
            ind++;
        }
        if(index > circle.length) index = 1; 
    }
    return circle[0];
}

module.exports = josephus;