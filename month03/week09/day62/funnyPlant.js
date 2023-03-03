function funnyPlant(x,y){
    let plants = new Array(y).fill(0);
    let fruits = 0;
    let week = 0;

    while(fruits < x){
        if(week > 0) plants.map((v,i) => plants[i] += 1);
        let seed = plants.reduce((prev,value) => prev+value, 0);
        let newPlants = new Array(seed).fill(0);
        plants = [...plants,...newPlants];
        fruits = plants.reduce((prev,value) => prev+value, 0);
        week++;
    }

    return week;
}

module.exports = funnyPlant;