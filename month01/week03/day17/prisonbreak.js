function freePrisioners(cells){
    let prisioners = 0;

    if(cells[0] === 0) return 0;
    for(let index in cells){
        if(cells[index] === 1){
            prisioners++;
            for(let ind in cells){
                if(cells[ind] === 0){
                    cells[ind] = 1;
                    continue;
                }
                cells[ind] = 0;
            }
        }    
    }
    return prisioners;
}

module.exports = freePrisioners;