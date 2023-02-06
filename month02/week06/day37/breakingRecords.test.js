const breakingRecords = require("./breakingRecords.js");

describe("36th challenge #100DaysOfCode",()=>{
    it('it should return [1,1] array',()=>{
        expect(breakingRecords([12,24,10,24])).toStrictEqual([1,1]);
    })

    it('it should return [2,4] array',()=>{
        expect(breakingRecords([10,5,20,20,4,5,2,25,1])).toStrictEqual([2,4]);
    })

    it('it should return [2,2] array',()=>{
        expect(breakingRecords([16,22,8,15,25,5,10,25,14])).toStrictEqual([2,2]);
    })
})