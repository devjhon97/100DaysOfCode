const rl = require("readline-sync");

async function weather(municipality, sigla){
    const apiKey = '66e97ebe08fb974555e8057851b0bd0d';
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${municipality}&appid=${apiKey}&units=metric&lang=pt_br`;;
    const res = await fetch(url);
    const data = await res.json();
    let log = `${municipality}\n${sigla}\n`;
    let forecast = [];

    if(data.cod === '404'){
        console.log("Esse munícipio não existe!");
        return
    }
 
    for(let i = 0; i < data.list.length; i++){
        let att = data.list[i];
        forecast.push({TempMin: att.main.temp_min, TempMax: att.main.temp_max, Resume: att.dt_txt});
    }

    for(let i = 0; i < forecast.length; i++){
        let resume = forecast[i].Resume;
        let man = [09, 15, 21];

        if(!man.includes(Number(resume.substring(11, 13)))){
            forecast.splice(i, 1);
            i--;
        }
    }

    for(let i = 0; i < forecast.length; i++){
        let resume = forecast[i].Resume;
        let period = Number(resume.substring(11, 13)) === 09 ? "Manhã" : Number(resume.substring(11, 13)) === 15 ? "Tarde" : "Noite";
        let day = Number(resume.substring(8, 10));

        log += `${period} do dia ${day} em ${municipality}\n-> Temperatura Mínima: ${forecast[i].TempMin}ºC\n-> Temperatura máxima: ${forecast[i].TempMax}ºC\n`;

    }

    console.log(log);
}

async function municipalities(mun){
    let url = "http://servicodados.ibge.gov.br/api/v1/localidades/municipios";
    let urMun = mun.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    urMun = urMun.substring(0, 1).toUpperCase() + urMun.substring(1);
    let municipality = String();
    let sigla = String();
    
    const res = await fetch(url);
    const data = await res.json();
    for(let i in data){
        let thisMun = (data[i].nome).normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        if(thisMun === urMun){
            municipality = thisMun;
            sigla = data[i].microrregiao.mesorregiao.UF.sigla;
            break
        }else if(thisMun.includes(urMun)){
            municipality = thisMun;
            sigla = data[i].microrregiao.mesorregiao.UF.sigla;
        }
    }

    if(!municipality) console.log("Esse município não existe!");
    else weather(municipality, sigla);
}


let mun = rl.question("Nome do município: ");
municipalities(mun);