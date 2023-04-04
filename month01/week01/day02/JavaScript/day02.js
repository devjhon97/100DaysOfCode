const readline = require("readline-sync");

function FindingNemo(){
    const  text = readline.question('type ur text: ');
    const words = text.split(/[^a-zA-Z0-9]+/);
    
    for(let ind in words){
        if(words[ind] == 'Nemo'){
            console.log(`I Found Nemo at ${ind}`);
            return;
        }
    }
    console.log("I can't find Nemo :(");
}

FindingNemo();