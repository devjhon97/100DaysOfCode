const readline = require('readline-sync');
const fs = require('fs');
const zlib = require('zlib');

function compress(src,target){
    let file = fs.readFileSync(src);

    let newFile = zlib.gzipSync(file);
    let name = target;
    fs.writeFileSync(target, newFile);
    fs.stat(target,  (err,stats) =>{
        console.log('Arquivo '+name+' foi criado! Tamanho do novo arquivo é '+stats.size+' bytes.')
    })
}

function decompress(src,target){
    let file = fs.readFileSync(src);

    let newFile = zlib.gunzipSync(file);
    let name = target;
    fs.writeFileSync(target,newFile);
    fs.stat(target,  (err,stats) =>{
        console.log('Arquivo '+name+'foi criado! Tamanho do novo arquivo é '+stats.size+' bytes.')
    })
}

let bool = readline.questionInt("Deseja comprimir ou descomprimir ? Digite 1 para comprimir ou 2 para descomprimir: ");

if(bool === 1 || bool === 2){
    let file = readline.questionPath("Digite o nome do arquivo que deseja alterar: ");
    let newFile = readline.question("Digite o nome que deseja dar para o novo arquivo: ");
    fs.stat(file, (err,stats) => {
        console.log('Tamanho do arquivo original: '+stats.size+' bytes.')
    })
    if(bool === 1) compress(file,newFile);
    else decompress(file,newFile);
}
