const rl = require('readline-sync');

function minesweeper(){
    let x = 0;
    let y = 0;
    let mines = 0;
    let safe;
    let value;
    let grid; 
    let table;

    // definindo o tamanho da grade e quandidade de minas.
    while(x < 3 || x > 10) x = rl.questionInt("Largura da grade? (3-10)");
    while(y < 3 || y > 10) y = rl.questionInt("Altura da grade? (3-10)");
    while(mines >= x*y || mines <= 0) mines = rl.questionInt(`Quantas minas? (1-${x*y-1})`);
    safe = x*y-mines;
    grid = Array.from({length: y}, () => Array.from({length: x}, () => '-'));
    table = Array.from({length: y}, () => Array.from({length: x}, () => '-'));

    // gerando as minas em lugares aleatórios da grade
    while(mines > 0){
        let rngx = Math.floor(Math.random()*x);
        let rngy = Math.floor(Math.random()*y);
        if(table[rngy][rngx] === '-'){
            table[rngy][rngx] = 9;
            mines--;
        }
    }

    // iterando todos os itens da tabela para verificar se há bombas adjacentes.
    for(let l = 0; l < table.length; l++){
        for(let i = 0; i < table[l].length; i++){
            if(table[l][i] === '-'){
                let con = 0;

                if(l-1 >= 0 && i-1 >= 0) if(table[l-1][i-1] === 9) con++;
                if(l-1 >= 0) if(table[l-1][i] === 9) con++;
                if(l-1 >= 0 && i+1 < table[l].length) if(table[l-1][i+1] === 9) con++;
                if(i-1 >= 0) if(table[l][i-1] === 9) con++;
                if(i+1 < table[l].length) if(table[l][i+1] === 9) con++;
                if(l+1 < table.length && i-1 >= 0) if(table[l+1][i-1] === 9) con++;
                if(l+1 < table.length) if(table[l+1][i] === 9) con++;
                if(l+1 < table.length && i+1 < table[l].length) if(table[l+1][i+1] === 9) con++;

                table[l][i] = con;
            }
        }
    }
    showGrid(grid);
    
    // pergunta a linha e coluna no qual o jogador quer abrir e verifica.
    while(safe > 0 && value !== 9){
        let xPlay = 0;
        let yPlay = 0
        while(xPlay <= 0 || xPlay > grid.length) xPlay = rl.questionInt(`Linha que deseja abrir? (1-${grid.length}) `);
        while(yPlay <= 0 || yPlay > y) yPlay = rl.questionInt(`Coluna que deseja abrir? (1-${grid[xPlay-1].length})`);

        if(grid[xPlay-1][yPlay-1] !== '-'){
            console.log('Espaço já selecionado!');
            continue;
        }

        value = table[xPlay-1][yPlay-1];
        grid[xPlay-1][yPlay-1] = value;
        showGrid(grid);
        if(value !== 9) safe--;
    }

    // verifica se o jogador ganhou ou perdeu.
    if(safe === 0) console.log("Você venceu!");
    else console.log("Você Perdeu!");
}

// função para atualizar a grade toda jogada.
function showGrid(grid){
    for(let l = 0; l < grid.length; l++){
        for(let a = 0; a < grid[l].length; a++){
            process.stdout.write(grid[l][a]+'  ');
        }
        console.log('\n');
    }
}

minesweeper();