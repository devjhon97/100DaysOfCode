const triArea = require("./areaTriangle.js");

describe('43th challenge #100DaysOfCode',()=>{
    it('it should return 3',()=>{
        expect(triArea(3, 2)).toBe(3);
    })

    it('it should return 10',()=>{
        expect(triArea(5, 4)).toBe(10);
    })

    it('it should return 14',()=>{
        expect(triArea(7, 4)).toBe(14);
    })

    it('it should return 50',()=>{
        expect(triArea(10, 10)).toBe(50);
    })

    it('it should return 66',()=>{
        expect(triArea(12, 11)).toBe(66);
    })

    it('it should return 0',()=>{
        expect(triArea(0, 60)).toBe(0);
    })
})