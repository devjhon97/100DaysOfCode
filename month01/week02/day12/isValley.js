function isValley(arr){
    let index = value = 10000;
    for(let ind in arr){
        if(arr[ind] <= value){ // verificando o menor número
            value = arr[ind];
            index = Number(ind);
        }
    }
    let trough = () =>{
        let troughindex = 0;
        for(let ind in arr){
            if(arr[ind] === value) troughindex++; // verificando se tem mais de 1 base
        }
        return troughindex;
    }
    if(trough() > 1) return;

    if(index === arr.length-1 || index === 0) return // verificando se ta nas bordas

    for(let ind = 0; ind< index-1; ind++){
        if(arr[Number(ind)+1] > arr[ind]) return; // verificando se a esquerda é decrescente
    }
    for(let ind = index+1; ind < arr.length-1; ind++){ // verificando se a direita é crescente
        if(arr[Number(ind)+1] < arr[ind]) return;
    }

    return true; // se passar por tudo isso é vila
}

module.exports = isValley;