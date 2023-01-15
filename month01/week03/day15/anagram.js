function anagram(s,t){
    var str = s.split('');
    
    for(let index = 0; index<t.length; index++){
        if(str.includes(t[index])){
            let ind = str.findIndex(value => value === t[index]);
            str.splice(ind,1);
        }else{
            return false;
        }
    }
    if(str.length === 0) return true;
}

module.exports = anagram;