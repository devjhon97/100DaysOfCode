const net = require('net');

const server = net.createServer((socket) => {
    console.log('Conexão estabelecida!\n');
    
    socket.on('data', data => {
        let msg = data.toString('utf-8');
        console.log(`Mensagem recebida: '${msg}'\nDevolvendo ao cliente...\n`);
        socket.write(msg);
    })

    socket.on('end', ()=> console.log('Cliente desconectado!'));
})

server.listen(3000, ()=>{
    console.log('Servidor online');
})