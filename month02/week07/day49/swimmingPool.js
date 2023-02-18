function isLegitimate(backyard){
    if(backyard[0].includes(1) || backyard[backyard.length-1].includes(1)) return false;

    for(let i = 1; i <= backyard.length-2; i++){
        if(backyard[i][0] === 1 || backyard[i][backyard[i].length-1] === 1) return false;
    }

    return true;
}

module.exports = isLegitimate;