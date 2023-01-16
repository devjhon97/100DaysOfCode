const readline = require('readline-sync');

function nimgame(pedras){
    //player
    do{
        console.log('Pedras restantes: '+pedras);
        var player = readline.questionInt('digite um numero entre 1 e 3  ');
        if(player < 1 || player > 3) console.error('Numero invalido!');
    }while(player < 1 || player > 3);
        pedras -= player;
        console.log('Pedras restantes: '+pedras);
        if(pedras <= 0){
            console.log('Parabens você ganhou!');
            console.log(true);
            return;
        }
        console.log('-------------------------');
    // CPU

    if(pedras <= 3){
        console.log('CPU tirou '+pedras+' pedras!');
        pedras -= pedras;
        console.log('Pedras restantes: '+pedras)
        console.log('CPU venceu!');
        console.log(false);
        return;
    }

    var cpu = Math.floor(Math.random()*3+1);
    pedras -= cpu;
    console.log('CPU tirou '+cpu+' pedras');
    console.log('-------------------------');

    nimgame(pedras);
}

nimgame(15);