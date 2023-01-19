function unique(col,row){
    let res = 1;
    let inc = col > row ? col : row;

    for(let index = 1; index< inc; index++){
        res += index+1;
        if(col == 2 || row == 2) break;
    }
    return res;
}

console.log(unique(3,7));
console.log(unique(3,2));
console.log(unique(3,3));
console.log(unique(3,4));
console.log(unique(7,3));
console.log(unique(2,3));
console.log(unique(3,3));