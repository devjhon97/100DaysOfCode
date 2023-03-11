const fs = require("fs");

function longestWord(keys){
    let dictionary = fs.readFileSync('./dicionario.txt', 'utf-8');
    let words = dictionary.split(/\s+/);
    let selectedWords = [];


    for(let word of words){

        for(let i = 0; i < word.length; i++){
            if(!keys.includes(word[i])) break;
            if(i+1 === word.length) selectedWords.push(word);
        }
    }

    return selectedWords.sort((a,b) => b.length - a.length)[0];
}

module.exports = longestWord;