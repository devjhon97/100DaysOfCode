const longestWord = require('./brokenKeyboard.js');

describe('70th challenge #100DaysOfCode', ()=>{
    it('it should return the longest word', ()=>{
        expect(longestWord("abcd")).toBe("acabada");
    })

    it('it should return the longest word', ()=>{
        expect(longestWord("qert")).toBe("reter");
    })

    it('it should return the longest word', ()=>{
        expect(longestWord("poiu")).toBe("poupou");
    })

    it('it should return the longest word', ()=>{
        expect(longestWord("azcv")).toBe("cavava");
    })

    it('it should return the longest word', ()=>{
        expect(longestWord("mnbui")).toBe("inibiu");
    })
})