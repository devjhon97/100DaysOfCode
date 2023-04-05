const rl = require("readline-sync");

function freeCash(n, times){
    let allTimes = new Set([...times]);

    return `\nSerá necessário ${times.length+1-allTimes.size} caixas amanhã.`;
}

function data(){
    let n = 0;
    let times = [];

    while(n <= 0 || n > 105) n = rl.questionInt("Quantos clientes virá amanhã? -> ");

    for(let i = 1; i <= n; i++){
        let hour;
        let minute;

        while(hour < 0|| hour > 23 || hour === undefined) hour = rl.questionInt(`Em que horas virá o ${i}° cliente? -> `);
        times.push(hour.toString());

        while(minute < 0 || minute > 59 || minute === undefined) minute = rl.questionInt(`Em que minuto virá o ${i}° cliente? -> `);
        times[times.length-1] += `:${minute.toString()}`;

    }

    return freeCash(n, times);
}

console.log(data());