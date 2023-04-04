function pairs(data){

    if(typeof data !== 'string'){
        return;
    }

    let str = data.split('').sort().join('');
    let pair = 0;

    for(let index = 0; index < str.length; index++){
        if(str.charAt(index) === str.charAt(index+1)){
            pair++;
            index++;
        }
    }

    return ("There are "+pair+' pairs.');
}

console.log(pairs("ABCDE")); // should have return 0;
console.log(pairs("AA")); // should have return 1
console.log(pairs("ABABC")); // should have return 2
console.log(pairs("CABBACCC")) // should have return 4
console.log(pairs("ABEDEEDCCDBA")) // should have return 5
