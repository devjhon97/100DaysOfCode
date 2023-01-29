function trafficLights(seq){
    let arr =  seq.split(/[^A-Z]+/);

    if(arr.length < 4 || arr.length >= 10) return 'ERROR!';
    if(arr[0] !== 'R' || arr[arr.length-1] !== 'R') return 'REJECT!';

    for(let index in arr){
        if(arr[index] === 'R'){
            if(Number(index)+1 === arr.length) return 'ACCEPT!';
            if(arr[Number(index)+1] === 'G' || arr[Number(index)+1] === 'C'){
                continue;
            }else return 'REJECT!';
        }
        if(arr[index] === 'G'){
            if(arr[Number(index)+1] === 'Y' || arr[Number(index)+1] === 'C'){
                continue;
            }else return 'REJECT!';
        }
        if(arr[index] === 'Y'){
            if(arr[Number(index)+1] === 'R'){
                continue;
            }else return 'REJECT!';
        }
        if(arr[index] === 'C'){
            if(arr[Number(index)+1] === 'R'){
                continue;
            }else return 'REJECT!';
        }
    }
}

module.exports = trafficLights;