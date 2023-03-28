function hulkFeelings(num){
    let sentence = String();

    for(let i = 0; i < num; i++){

        for(let l = 0; l <= i; l++){
            if(l === 0) sentence = "I hate that ";
            else {
                if(l%2 === 1) sentence += "i love that ";
                else sentence += "i hate that ";
            }
        }

        sentence = sentence.substring(0, sentence.length-5) + 'it\n';
    }

    return sentence
}

module.exports = hulkFeelings;