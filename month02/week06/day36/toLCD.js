let nums = [[true,true,true,false,true,true,true], //0
            [false,false,true,false,false,true,false], //1
            [true,false,true,true,true,false,true], //2
            [true,false,true,true,false,true,true], //3
            [false,true,true,true,false,true,false], //4
            [true,true,false,true,false,true,true], //5
            [true,true,false,true,true,true,true], //6
            [true,false,true,false,false,true,false], //7
            [true,true,true,true,true,true,true], //8
            [true,true,true,true,false,true,true]]; //9
let segment = ['-','|','|','-','|','|','-'];

function toLCD(n,s){
    let output = '';
    n = String(n).split('').map(value => Number(value));
    
    for(let index = 0; index < nums[0].length; index++){
        for(let value of n){
            if(nums[value][index]){
                if(index === 0 || index === 3 || index === 6){
                    output += ' ' + segment[index].repeat(s) + ' ';
                }else{
                    output += segment[index] += ' '.repeat(s);
                    if(nums[value][index+1]){
                        output += segment[index+1];
                    }else output += ' ';
                }
            }else{
                if(index === 0 || index === 3 || index === 6) output += ' '.repeat(s+2);
                else{
                    if(nums[value][index+1]){
                        output += ' '.repeat(s+1) + segment[index];
                    }else{
                        output += ' '.repeat(s+2);
                    }
                }
            }
            output += ' ';
        }
        console.log(output);
        if(index === 1 || index === 4){
            for(let i = 1; i < s; i++)[
                console.log(output)
            ]
        }
        output = '';
        if(index === 1 || index === 4) index++;
    }
    return output;
}

console.log(toLCD(12345,2));
console.log(toLCD(67890,3));
console.log(toLCD(45726,4));