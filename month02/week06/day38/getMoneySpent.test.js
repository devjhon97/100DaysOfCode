const getMoneySpent = require("./getMoneySpent.js");

describe("38th challenge #100DaysOfCode",()=>{
    it('it should return 58',()=>{
        expect(getMoneySpent([40,50,60],[5,8,12],60)).toBe(58);
    })

    it('it should return -1',()=>{
        expect(getMoneySpent([40,50,60],[5,8,12],40)).toBe(-1);
    })

    it('it should return 65',()=>{
        expect(getMoneySpent([70,40,50],[15,5,10],65)).toBe(65);
    })
})