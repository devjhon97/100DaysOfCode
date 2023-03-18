function nextMove(n, x, y, arr){
    if(n**2 !== arr.flat().length) return 'Tabela incorreta!';
    let bot = [];
    let princess = [];
    let movement = String();

    for(let l = 0; l < arr.length; l++){
        for(let c = 0; c < arr[l].length; c++){
            if(arr[l][c] === 'B') bot.push(l, c);
            else if(arr[l][c] === 'P') princess.push(l, c);
        }
    }
    
    if(!bot || !princess) return 'Falta informações';
    if(bot[0] !== x || bot[1] !== y) return 'Posição do Bot não coincide com o parâmetro passado!';

    while(x !== princess[0] || y !== princess[1]){
        let dx = Math.abs(x-princess[0]);
        let dy = Math.abs(y-princess[1]);
        
        if(dx > 0){
            if(x > princess[0]){
                [arr[x][y], arr[x-1][bot[y]]] = ['-', 'B'];
                x -= 1;
                movement += 'UP ';
            }else{
                [arr[x][bot[y]], arr[x+1][y]] = ['-', 'B'];
                x += 1;
                movement += 'DOWN ';
            }
        }else if(dy > 0){
                if(y > princess[1]){
                    [arr[x][y], arr[x][y-1]] = ['-', 'B'];
                    y -= 1;
                    movement += 'LEFT ';
                }else{
                    [arr[x][y], arr[x][y+1]] = ['-', 'B'];
                    y += 1;
                    movement += 'RIGHT ';
                }
        }
    }

    return movement;
}

module.exports = nextMove;