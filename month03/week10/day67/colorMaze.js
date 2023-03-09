function colorMaze(colors, maze){
    let table = [[]];
    let res = 'Sem solução';
    let bool = false;
    let len = Math.floor(Math.sqrt(maze.length));
    
    for(let i = 0; i < maze.length; i++){
        if(!colors.includes(maze[i])) maze[i] = null;
    }

    for(let i = 0; i < maze.length; i++){
        if(table[table.length-1].length < len) table[table.length-1].push(maze[i]);
        else table.push([maze[i]]); 
    }

    for(let bt = table[table.length-1].length-1; bt >= 0; bt--){
        if(table[table.length-1][bt] !== null){
            res = `(${bt}, ${table.length-1})\n`;

            function mapping(coord, y, x, mov){
                if(x === 0){
                    res = coord;
                    bool = true;
                }
                if(x-1 >= 0) if(table[x-1][y] !== null && mov !== 'D') mapping(coord += `(${y}, ${x-1})\n`, y, x-1, 'U');
                if(y-1 >= 0) if(table[x][y-1] !== null && mov !== 'R') mapping(coord += `(${y-1}, ${x})\n`, y-1, x, 'L');
                if(y+1 < table[table.length-1].length) if(table[x][y+1] !== null && mov !== 'L') mapping(coord += `(${y+1}, ${x})\n`, y+1, x, 'R');
                if(x+1 < table.length) if(table[x+1][y] !== null && mov !== 'U') mapping(coord += `(${y}, ${x+1})\n`, y, x+1, 'D');
            }

            mapping(res, bt, table.length-1);
            if(bool) break
        }
    }

    if(!bool) return 'Sem solução!';
    else return res;
}

console.log(colorMaze(['R', 'W'], ['R', 'O', 'G', 'W', 'R', 'W','G', 'O', 'R','O', 'R', 'W'])); // it has solution!

console.log(colorMaze(['O', 'G'], ['B', 'O', 'R', 'O', 'Y', 'O', 'R', 'B', 'G', 'R','B', 'O', 'G', 'O', 'Y','Y', 'G', 'B', 'Y', 'G','R', 'O', 'R', 'B', 'R'])); // it has solution!

console.log(colorMaze(['R', 'W'], ['R', 'O', 'G', 'W', 'R', 'W', 'G', 'O', 'O', 'O', 'R', 'W'])) // no solution!
