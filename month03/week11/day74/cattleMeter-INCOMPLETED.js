const axios = require('axios').default;
const cheerio = require('cheerio');

async function req(url){
    try{
        const res = await axios.get(url);
        const info = cheerio.load(res.data);
        return info('img');
    }catch(err){
        return err;
    }
}

req('https://twitter.com/iapolinario/photo').then(data => {
    console.log(data);
});