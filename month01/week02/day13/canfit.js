function canfit(weight,bag){
    let totalweight = 0;
    let index = 0;
    let bags = [];

    for(let index = 1 ;index<= bag; index++){
        bags.push([]);
    }

    for(let index in weight){
        totalweight += weight[index];
    }

    var res = 0;
    var bagweight = 0;
    var tryput = 0;
    weight.sort((a,b)=> b-a);
    do{
        tryput++;
        for(let ind in bags[index]){
            res += bags[index][ind];
        }
        if(res + weight[0] <= 10){
            bagweight = weight[0]+bagweight;
            bags[index].push(weight[0]);
            weight.splice(0,1);
            tryput--;
        }
        if(index < bags.length-1){
            index++;
        }else{
            index = 0;
        }
        res = 0;
    }while(weight.length > 0 && tryput <= 10);

    console.log(`${totalweight}kg no total`);
    for(let ind in bags){
        console.log(`Bag ${Number(ind)+1}: ${bags[ind]}`);
    }

    if(totalweight > bag*10) return `FALSE: ficou ${totalweight-bagweight}kg pra fora`;
    return `TRUE: coube todos os itens nas bags.`;
}

console.log(canfit([2,1,2,5,4,3,6,1,1,9,3,2],4));
console.log('-------------')
console.log(canfit([2,7,1,3,3,4,7,4,1,8,2],4));
console.log('-------------');
console.log(canfit([3,7,4,1,9,4,10,2,5],5));
console.log('-------------');
console.log(canfit([3,8,1,2,7,10,6],3));