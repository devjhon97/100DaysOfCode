const MinTurns = require("./briefcaseLock.js");

describe('Challenge 26/100 #100DaysOfCode',()=>{
    it('it should return 9',()=>{
        expect(MinTurns("4089","5672")).toBe(9);
    })

    it('it should return 2',()=>{
        expect(MinTurns("1111","1100")).toBe(2);
    })

    it('it should return 10',()=>{
        expect(MinTurns("2391","4984")).toBe(10);
    })
})