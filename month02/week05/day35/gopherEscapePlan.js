const fr = require('fs');

function gopherEscapePlan(file){
    const data = fr.readFileSync(file,'utf-8')
    let values = data.split(/[^\d.]+/).map(value => Number(value));
    if(values.length < 7) return "BAD FILE!";

    let gopher = [values[1],values[2]];
    let dog = [values[3],values[4]];
    values.splice(1,4);
    if(values.length % 2 === 0) return "BAD FILE!";
    let holes = [];

    while(values.length > 1){
        holes.push(values[1],values[2]);
        values.splice(1,2);
    }

    for(let index = 1; holes.length > 1; index++){
        let gopherPosition = gopher.reduce((bef,value) => value+bef,0);
        let dogPosition = dog.reduce((bef,value) => value+bef,0);
        let holePosition = holes[0]+holes[1];
        gopherPosition = Math.abs(holePosition-gopherPosition);
        dogPosition = Math.abs(holePosition-dogPosition);

        if(gopherPosition*2 < dogPosition){
            return `The gopher can escape through the ${index}º hole at (${parseFloat(holes[0])},${parseFloat(holes[1])})\n`;
        }else{
            console.log(`The gopher cannot escape through the ${index}º hole`);
            holes.splice(0,2);
        }
    }

    return "The gopher cannot escape the dog\n";
}

module.exports = gopherEscapePlan;