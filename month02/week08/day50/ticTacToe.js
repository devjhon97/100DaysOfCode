function ticTacToe(board){
    for(let value of board){
        if(!value.includes("X") && !value.includes("#")) return "Player 2 Wins!";
        if(!value.includes("O") && !value.includes("#")) return "Player 1 Wins!";
    }

    for(let i = 0; i < board.length; i++){
        if(board[0][i] === board[1][i] && board[1][i] === board[2][i]){
            if(board[0][i] === "X") return "Player 1 Wins!";
            else return "Player 2 Wins!";
        }
    }

    if(board[0][0] === board[1][1] && board[1][1] === board[2][2] || board[0][2] === board[1][1] && board[1][1] === board[2][0]){
        if(board[1][1] === "X") return "Player 1 Wins!";
        else return "Player 2 Wins!";
    }

    return "It's a tie!";
}

module.exports = ticTacToe;