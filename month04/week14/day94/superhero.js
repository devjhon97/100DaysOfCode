function canTransform(s, t){
    const vowels = ["a", "e", "i", "o", "u"];

    if(s.length === t.length){

        for(let i = 0; i < t.length; i++){

            if(vowels.includes(s.charAt(i)) && vowels.includes(t.charAt(i))) s = s.substring(0, i) + t.charAt(i) + s.substring(i+1);
            else if(!vowels.includes(s.charAt(i)) && !vowels.includes(t.charAt(i))) s = s.substring(0, i) + t.charAt(i) + s.substring(i+1);
        }

    }else return "No!";

    if(s === t) return "Yes!";
    else return "No!";
}

module.exports = canTransform;