const net = require('net');
const rl = require('readline-sync');
const client = new net.Socket();

let msg = rl.question("Digite uma mensagem: ");

try{
    client.connect({port: 3000}, ()=>{
        console.log('Conectando ao servidor!');
        client.write(msg);
    })
    
    client.on('data', (data) => {
        console.log('Conectado!\n');
        console.log(`Mensagem devolvida: ${data.toString('utf-8')}`);
        client.end();
    })

    client.on('error', (err)=> {
        console.log('Erro ao se conectar ao servidor!');
        client.destroy();
    })

}catch(err) {
    console.log('O servidor está offline!');
    client.destroy();
}
