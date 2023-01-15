function encrypt(str){
    let word = str.split('').reverse();
    
    for(let index in word){
        if(word[index] === 'a') word[index] = 0;
        if(word[index] === 'e') word[index] = 1;
        if(word[index] === 'i') word[index] = 2;
        if(word[index] === 'o') word[index] = 2;
        if(word[index] === 'u') word[index] = 3;
    }

    word = word.join('');
    word += 'aca';

    return word;
}

module.exports = encrypt;