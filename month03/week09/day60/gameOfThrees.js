function gameOfThrees(num){
    let output = '';

    while(num !== 1){
        if(num % 3 === 0){
            output += `${num} 0\n`;
            num = num/3;
        }else if((num+1) % 3 === 0){
            output += `${num} 1\n`;
            num = (num+1)/3;
        }else{
            output += `${num} -1\n`;
            num = (num-1)/3;
        }
    }

    output += num;
    return output;
}

console.log(gameOfThrees(100));
console.log(gameOfThrees(200));
console.log(gameOfThrees(500));
console.log(gameOfThrees(1000));