const net = require('net');
const rl = require('readline-sync');

let msg = rl.question("Digite uma mensagem: ");

const client = net.createConnection({port: 3000}, ()=>{
    console.log('Conectando ao servidor!');
    client.write(msg);
})

client.on('data', (data) => {
    console.log('Conectado!\n');
    console.log(`Mensagem devolvida: ${data.toString('utf-8')}`);
    client.end();
})