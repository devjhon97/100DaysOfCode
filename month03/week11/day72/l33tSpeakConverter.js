function l33tSpeakConverter(str){
    let table = {'A': '4', 'B': '6', 'E': '3','I': '1','M': '(V)','N': '(\)','O': '0','S': '5','T': '7','V': '\/','W': '`//' };
    let l33t = '';

    for(let l = 0; l < str.length; l++){
        if(table[str[l].toUpperCase()]) l33t += table[str[l].toUpperCase()];
        else l33t += str[l].toUpperCase();
    }

    return l33t;
}

module.exports = l33tSpeakConverter;