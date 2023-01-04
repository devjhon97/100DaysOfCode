class progressDay {
    constructor (days){
        this.days = days;
    }

    wasDayProgressed(days){
        let progress = 0;
        for(let index=1;index<=days.length;index++){
            if(days[index] > days[index-1]){
                progress++
            };
        }
        console.log(`Houve progressão em ${progress} dias!`);
        return progress;
    }
}

// variáveis
const test1 = new progressDay([3,4,1,2]);
const test2 = new progressDay([10,11,12,9,10]);
const test3 = new progressDay([6,5,4,3,2,9]);
const test4 = new progressDay([9,9]);

// Chamando a função os 4 testes
test1.wasDayProgressed(test1.days);
test2.wasDayProgressed(test2.days);
test3.wasDayProgressed(test3.days);
test4.wasDayProgressed(test4.days);