function preventDistractions(str){
    let forbiddenWords = ['memes','vines','anime','roasts','Danny DeVito'];

    for(let word of forbiddenWords){
        if((str).toLowerCase().includes(word.toLowerCase())) return "NO!";
    }

    return "Safe watching!";
}

module.exports = preventDistractions;