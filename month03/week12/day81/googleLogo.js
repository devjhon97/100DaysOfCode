const rl = require('readline-sync');
const jimp = require('jimp');

async function googleLogo(num){
    try {
        const logo = await jimp.read('./google.png');
        logo.resize(num, num).writeAsync(`./createdImages/google${num}x${num}.png`);
        return `Imagem criada com sucesso! nova imagem de ${num}x${num} foi armazenada na pasta "createdImages"`;
    }catch(err) {
        return err;
    }
}

async function imageCreator(){
    const area = rl.questionInt('Digite o tamanho da imagem: ');
    console.log(await googleLogo(area));
}

imageCreator();