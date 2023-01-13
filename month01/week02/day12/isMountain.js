function isMountain(arr){
    let index = value = 0;
    for(let ind in arr){
        if(arr[ind] >= value){  // verificando o maior número
            value = arr[ind];
            index = Number(ind);
        }
    }
    let peak = () =>{
        let peakindex = 0;
        for(let ind in arr){
            if(arr[ind] === value) peakindex++; // verificando se tem mais 1 pico
        }
        return peakindex;
    }
    if(peak() > 1) return;

    if(index === arr.length-1 || index === 0) return // verificando se ta nas bordas

    for(let ind = 1 ; ind <index; ind++){  // verificando se a esquerda é crescente
        if(arr[ind-1] > arr[ind]) return ;
    }                       
    for(let ind = index+1; ind< arr.length-1; ind++){ // verificando se a direita é decrescente
        if(arr[Number(ind)+1] > arr[ind]) return;
    }

    return true; // se passar por tudo isso é montanha
}

module.exports = isMountain;