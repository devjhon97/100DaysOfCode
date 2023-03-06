function IBSNvalidator(id){
    id = id.replace(/[-]/g, '');
    if(id.length > 10) id = id.substring(0, id.length-2) + 'X';
    let sum = 0;

    for(let i = 0; i < id.length; i++){
        if(id[i] !== 'X') sum += (id.length-i)*id[i];
        else sum += (id.length-i)*10;
    }

    if(sum % 11 === 0) return true;
    else return false;
}

module.exports = IBSNvalidator;