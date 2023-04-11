function finalHelloWorld(){
    let name = finalHelloWorld.name.substring(5);
    name = name.substring(0, 5) + String.fromCharCode(44, 32) + name.substring(5);

    let asciiname = [];

    for(let i = 0; i < name.length; i++){

        for(let l = 1; l <= 255; l++){
            if(l === name.charCodeAt(i)){
                asciiname.push(l);
                break
            }
        }
    }
    
    let output = String();

    for (let ascii of asciiname) {
        output += String.fromCharCode(ascii);
    }

    return output
}

console.log(finalHelloWorld());