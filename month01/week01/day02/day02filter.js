const readline = require("readline-sync");

function findingNemo(){
    var indice;
    var text = readline.question('Type ur text here: ');
    var words = text.split(/[^a-zA-Z0-9]+/);
    var nemo = words.find((word)=>{
        if(word == 'Nemo'){
            indice = (words.indexOf(word)+1);
            return true;
        }else{
            return false;
        }
    })
    if(nemo){
        console.log(`O nemo foi encontrado na posição `+indice);
    }else{
        console.log('O nemo não foi encontrado!');
    }
}

findingNemo();