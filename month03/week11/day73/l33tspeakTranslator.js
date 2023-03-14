function l33tTranslator(str){
    let table = {'4': 'a', '6': 'b', '3': 'e', '1': 'i', '(V)': 'm', '(\\)': 'n', '0': 'o', '5': 's', '7': 't', '\\/': 'v', '`//': 'w'};

    for(let key in table){
        if(str.includes(key)) str = str.replace(new RegExp(key, 'g'), table[key]);
    }

    return str.toLowerCase().replace(/[^a-zA-Z]/g, '');
}

module.exports = l33tTranslator;