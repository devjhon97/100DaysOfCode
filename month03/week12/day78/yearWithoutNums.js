function year(){
    let word = 'wwwwwwwwwwwwwwwww';
    let w = Array.from({length: word.length}, ()=> 'w');
    let year;

    for(let v of w){
        year = year ? year + v.charCodeAt() : v.charCodeAt();
    }

    return year;
}

console.log(year());