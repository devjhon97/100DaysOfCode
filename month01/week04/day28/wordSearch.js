function wordSearch(board,words){
    let res = [];

    function search(value){
        for(let index = 0; index < board.length; index++){
            for(let v = 0; v < board[index].length; v++){
                if(board[index][v] === value.charAt(0)){
                    let ind = 1;
                    
                    while(ind < value.length){
                        if(board[index][v+1]){
                            if(board[index][v+1] === value.charAt(ind)){
                                ind++;
                                v++;
                                continue;
                            }
                        }
                        if(board[index][v-1]){
                            if(board[index][v-1] === value.charAt(ind)){
                                ind++;
                                v--;
                                continue;
                            }
                        }
                        if(board[index+1][v]){
                            if(board[index+1][v] === value.charAt(ind)){
                                ind++;
                                index++;
                                continue;
                            }
                        }
                        if(board[index-1][v]){
                            if(board[index-1][v] === value.charAt(ind)){
                                ind++;
                                index--;
                                continue;
                            }
                        }
                        break;
                    }

                    if(ind === value.length){
                        res.push(value);
                        return;
                    }                }
            }
        }
    }

    for(let value of words){
        search(value);
    }

    return res.sort();
}

module.exports = wordSearch;