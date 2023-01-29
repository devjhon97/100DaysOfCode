const wordSearch = require("./wordSearch.js");

describe('28th challenge, #100DaysOfCode',()=>{
    it('it should return \'eat\' and \'oath\' word',()=>{
        expect(wordSearch([['o','a','a','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']],['oath','pea','eat','rain'])).toStrictEqual(['eat','oath']);
    })
})