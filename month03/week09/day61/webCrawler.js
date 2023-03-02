const cheerio = require("cheerio");
const axios = require("axios");

async function discoveredURL(seed, depth) {
  let queue = [{url: seed, deep: 1}];

  async function crawl(url, depth) {
    let currentUrls = [];

    await axios
      .get(url)
      .then((res) => {
        const info = cheerio.load(res.data);
        const links = info("a");

        links.each((i, e) => {
          let link = info(e).attr("href");
          currentUrls.push({url: link, deep: depth});
        });
      })
      .catch((error) => {
        console.error(error);
      });

    return currentUrls;
  }

  let con = 0;

  while(con !== depth){
    con++;

    for(let value of queue){
        if(value.deep === con) queue = queue.concat(await crawl(value.url, value.deep+1));
    }
  }

  return queue;
}

let depth = 2;
discoveredURL("http://www.example.com", depth).then((queue) => {
  console.log(queue);
  console.log(`${queue.length} Links encontrados com ${depth} de profundidade.`);
}).catch((error) => {
  console.error(error);
});
