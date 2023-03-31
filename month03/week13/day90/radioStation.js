const rl = require("readline-sync");

function commandsNginx(n, m ){
    let servers = [];
    let ips = [];
    let log = String();

    while (n > 0){
        let name = rl.question(`Nome do ${servers.length+1}º servidor: `);
        servers.push(name)
        ;
        let ip = String();
        let isValid = false;
        while(!isValid){
            ip = rl.question(`IP do servidor ${servers[servers.length-1]}: `);

            let nums = ip.split(/[.]/).map(value => Number(value));
            if(nums.length !== 4){
                console.log("IP inválido!");
                continue
            };

            if(nums.every(val => val >= 0 && val <= 255)) isValid = true;
            else console.log("IP inválido!");
        } 
        ips.push(ip);
        n--;
    }

    while(m > 0){
        console.log("\nComandos: "+m+"\n");
        let sv = String();
        while(!servers.includes(sv)){
            sv = rl.question(`Em qual servidor você deseja disparar um comando? -> `);
            if(!servers.includes(sv)) console.log("A escola não possuí esse servidor.");
        }

        let command = rl.question(`Qual comando você quer disparar no servidor ${sv}? -> `);


        let index = servers.indexOf(sv);
        log += command+" "+ips[index]+"; #"+servers[index]+"\n";
        console.log("\nComando disparado com sucesso!");

        m--;
    }

    return "\n"+log;
}

let n = rl.questionInt("Quantos servidores tem na escola? -> ");
let m = rl.questionInt("Quantos comandos você deseja realizar? -> ");

console.log(commandsNginx(n, m));