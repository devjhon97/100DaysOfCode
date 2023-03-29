const hitTheLottery = require('./hitTheLottery.js');

describe("88th challenge #100DaysOfCode", ()=>{
    it("it should return the smallest amount of bills in withdraw process.", ()=>{
        expect(hitTheLottery(125)).toBe(3);
    })

    it("it should return the smallest amount of bills in withdraw process.", ()=>{
        expect(hitTheLottery(43)).toBe(5);
    })

    it("it should return the smallest amount of bills in withdraw process.", ()=>{
        expect(hitTheLottery(1000000000)).toBe(10000000);
    })

    it("it should return the smallest amount of bills in withdraw process.", ()=>{
        expect(hitTheLottery(353)).toBe(9);
    })
})