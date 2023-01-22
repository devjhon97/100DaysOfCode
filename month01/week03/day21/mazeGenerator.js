function drawMaze(col,row){

    function random(info){
        let bool = info === 'col' ? 40 : 20;
        let nm = Math.floor(Math.random()*100+1);
        if(nm > 0 && nm <= bool) return true;
        return false;
    }

    let indcol = col;
    let sort;

    while(indcol > 0){
        for(let index = 1; index <= row; index++){
            sort = random('row');
            if(indcol === col || (index == 1 && indcol === col) || (index === row && indcol === row) || sort === true){
                process.stdout.write('+---');
            }else{
                process.stdout.write('+   ');

            }
        }
        process.stdout.write('+\n');
        for(let index = 0; index <= row; index++){
            sort = random('col');
            if(index == 0 || index === row || sort === true){
                process.stdout.write('|   ');
            }else{
                process.stdout.write('    ');
            }
        }
        process.stdout.write('\n');
        indcol--;
    }
    for(let index = 1; index <= row; index++){
        process.stdout.write('+---');
    }
    process.stdout.write('+');
}   

drawMaze(4,6);