const rl = require("readline-sync");

async function municipalities(acronym){
    let url = "http://servicodados.ibge.gov.br/api/v1/localidades/municipios";
    let mun = 0;
    let nome = String();
    acronym = acronym.toUpperCase();

    const res = await fetch(url);
    const data = await res.json();

    for(let i in data){
        if(data[i].microrregiao.mesorregiao.UF.sigla === acronym){
            mun++;
            if(!nome) nome = data[i].microrregiao.mesorregiao.UF.nome;
        }
    }

    if(mun > 0) console.log(`${nome} tem ${mun} municípios.`);
    else console.log("Esse estado não existe");
}


let acronym = rl.question("Acrônimo da cidade: ");
municipalities(acronym);