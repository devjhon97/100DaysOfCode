const grill = [];

function barcecue(){

    for(let allGrills=1;allGrills<=5;allGrills++){
        let currentSkewer = '';
        for(let amount = 1; amount<=12; amount++){
            let randomNumber = Math.floor(Math.random()*3+1);
            switch (randomNumber) {
                case 1:
                    currentSkewer += 'x'
                    break;
                case 2:
                    currentSkewer += '-';
                    break;
                default:
                    currentSkewer += 'o';
                    break;
            }
        }
        console.log(currentSkewer);
        grill.push(currentSkewer);
    }

    let vegetarianSkewers = 0;
    let nonVegetarianSkewers = 0;
    for(let ind in grill){
        if(grill[ind].includes('x')){
            nonVegetarianSkewers++;
        }else{
            vegetarianSkewers++;
        }
    }
    console.log(`There are ${vegetarianSkewers} vegetarian skewers, and ${nonVegetarianSkewers} non-Vegetarian Skewers`);
}

barcecue();