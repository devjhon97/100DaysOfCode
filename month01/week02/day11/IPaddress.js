function IPaddress(num){
    if(num.length < 4 || num.length > 12){
        console.error('insira um número entre 4 e 12 digitos')
        return;
    }   

    const ValidIP = [];
    var digits = [];
    var ip;
    var zerotest = false;

    for(let index1 = 1; index1<=3; index1++){
        for(let index2 = index1+1; index2 <= index1+3; index2++){
            for(let index3 = index2+1; index3 <= index2+3; index3++){
                if(index3 >= num.length) continue;
                digits[0] = num.substring(0,index1);
                digits[1] = num.substring(index1,index2);
                digits[2] = num.substring(index2,index3);
                digits[3] = num.substring(index3);
                if((digits[0] >= 0 && digits[0] <=255)&&(digits[1] >= 0 && digits[1] <=255)&&(digits[2] >= 0 && digits[2] <= 255)&&(digits[3] >= 0 && digits[3] <= 255)){

                    for(let ind = 0; ind <=3; ind++){
                        let integers = digits[ind].toString();
                        if(integers.charAt(0) === '0' && integers.length > 1){
                            zerotest = true;
                            continue;
                        }
                    }

                    if(zerotest === true){
                        zerotest = false;
                        continue;
                    }

                    ip = digits[0]+'.'+digits[1]+'.'+digits[2]+'.'+digits[3];
                    ValidIP.push(ip);
                };
            }
        }
    }

    if(ValidIP.length === 0) return 'Não foi possivel fazer nenhuma combinação!';
    return ValidIP;
}

module.exports = IPaddress;