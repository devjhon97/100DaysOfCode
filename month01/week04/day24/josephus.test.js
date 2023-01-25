const josephus = require("./josephus.js");

describe('Challenge 24/100 #100DaysOfCode', ()=>{
    it('it should return 31',()=>{
        expect(josephus(41,3)).toBe(31);
    })

    it('it should return 18',()=>{
        expect(josephus(35,11)).toBe(18);
    })

    it('it should return 11',()=>{
        expect(josephus(11,1)).toBe(11);
    })

    it('it should return 1',()=>{
        expect(josephus(2,2)).toBe(1);
    })
})