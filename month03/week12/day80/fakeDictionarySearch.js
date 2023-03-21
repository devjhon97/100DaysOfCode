async function fakeDictionarySearch(){
    const hashLength = {};
    const hashLetters = {};
    const fs = require('fs');
    
    const dictionary = fs.readFileSync('./dicionario.txt', 'utf-8');
    const words = dictionary.split(/\s+/);
    let count = 0;
    let letter = String();
    let len = Number();
    
    for(let word of words){
        console.clear();
        console.log(`Analisando a palavra '${word}'`);
        console.log('Palavras analisadas: '+count+'\n');
        hashLength[word.length] = hashLength[word.length] ? hashLength[word.length] += 1 : 1;
        words.shift();
        words.push(word);
        count++;

        for(let i = 0; i < word.length; i++){
            hashLetters[word[i]] = hashLetters[word[i]] ? hashLetters[word[i]] += 1 : 1;
        }

        for(let i in hashLength){
            len = len ? hashLength[i] > len ? len = i : len : i;
        }

        for(let i in hashLetters){
            letter = letter ? hashLetters[i] > letter ? letter = i : letter : i;
        }
        console.log('Palavras com quantidade de letras que mais apareceu: '+len);
        console.log('A letra que mais apareceu até agora: '+letter);

        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

fakeDictionarySearch();