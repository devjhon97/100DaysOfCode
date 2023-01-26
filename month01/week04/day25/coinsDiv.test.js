const coinsDiv = require("./coinsDiv.js");

describe('Challenge 25/100 #100DaysOfCode', ()=>{
    it('it should return true',()=>{
        expect(coinsDiv([1,2,3,2,2,2,3])).toBe(true);
    })

    it('it should return false',()=>{
        expect(coinsDiv([5,3,10,1,2])).toBe(false);
    })

    it('it should return true',()=>{
        expect(coinsDiv([2,4,3,2,4,9,7,8,6,9])).toBe(true);
    })
})