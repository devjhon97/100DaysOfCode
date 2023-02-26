function sigilize(str){
    let glyph = str.toUpperCase().match(/([^aeiou\s])/gi);
    let output = '';

    for(let i = glyph.length-1; i >= 0; i--){
        if(!output.includes(glyph[i])) output = glyph[i]+output;
    }

    return output;
}

module.exports = sigilize;