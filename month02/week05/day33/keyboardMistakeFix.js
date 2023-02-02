function keyboardMistakeFix(input){
    let keyboard = '1234567890-=QWERTYUIOP[ASDFGHJKL;ZXCVBNM,./  ';
    let text = '';

    for(let index = 0; index < input.length; index++){
        text += keyboard[keyboard.lastIndexOf(input[index])-1];
    }

    return text;
}

module.exports = keyboardMistakeFix;