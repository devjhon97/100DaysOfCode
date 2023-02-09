function getMoneySpent(keyboards,drives,budget){
    let prices = [];

    for(let keyprices of keyboards){
        for(let usbprices of drives){
            if(keyprices+usbprices <= budget) prices.push(keyprices+usbprices);
        }
    }
    return prices.sort((a,b)=> b-a)[0] === undefined ? -1 : prices[0];
}

module.exports = getMoneySpent;