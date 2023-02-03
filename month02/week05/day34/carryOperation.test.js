const carryOperation = require("./carryOperation.js");

describe("34th challenge #100DaysOfCode",()=>{
    it('it should return 0',()=>{
        expect(carryOperation(123,456)).toBe(0);
    })

    it('it should return 3',()=>{
        expect(carryOperation(555,555)).toBe(3);
    })

    it('it should return 1',()=>{
        expect(carryOperation(123,594)).toBe(1);
    })

    it('it should return 3',()=>{
        expect(carryOperation(555,545)).toBe(3);
    })

    it('it should return 0',()=>{
        expect(carryOperation(1,20000)).toBe(0);
    })

    it('it should return 0',()=>{
        expect(carryOperation(1,2)).toBe(0);
    })
})