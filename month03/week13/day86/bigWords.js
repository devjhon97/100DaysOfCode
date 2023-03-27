function bigWords(word){

    if(word.length <= 10) return word;
    else return word.charAt(0) + word.substring(1, word.length-1).length + word.charAt(word.length-1);
}

module.exports = bigWords;