const rl = require("readline-sync");

function climbMoves(n, m){
    let moves = Number();
    let minpath = String();

    function climbing(n, m, move, path){
        if(n === 0 && move%m === 0 && (move <= moves || !moves)){
            moves = move;
            minpath = path;
        }
        else {
            if(n > 0) climbing(n-1, m, move+1, path+" 1");
            if(n > 1) climbing(n-2, m, move+1, path+" 2");
        }
    }

    climbing(n, m, 0, "");
    if(moves) return `${moves} ${minpath}`;
    else return -1;
}

let n = rl.questionInt("Número de degraus: ");
let m = rl.questionInt("Número condicional: ");

console.log(climbMoves(n, m));