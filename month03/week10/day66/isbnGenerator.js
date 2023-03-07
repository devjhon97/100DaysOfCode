const ISBNvalidator = require ('../day65/isbnValidator');
let res = false;

function ISBNGenerator(){
    let id = '';

    for(let i = 1; id.length < 10; i++){
        id += Math.floor(Math.random()*11);
    }
    if(id.length > 10) id = id.substring(0,id.length-2) + '-' + 'X';
    else id = id.substring(0, id.length-1) + '-' + id.substring(id.length-1); 

    while(id.length < 13){
        let len = id.length-2;
        let rng = Math.floor(Math.random()*len+1);
        if(id.charAt(rng) !== '-' && id.charAt(rng-1) !== '-' && id.charAt(rng+1) !== '-') id = id.substring(0, rng) + '-' + id.substring(rng);
    }

    if(ISBNvalidator(id)) return id;
    return false;
}

while(!res) res = ISBNGenerator();

console.log('Código ISBN valido gerado: '+res);