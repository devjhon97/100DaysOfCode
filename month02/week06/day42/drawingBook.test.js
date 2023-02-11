const minPages = require("./drawingBook.js");

describe("42th challenge #100DaysOfCode",()=>{
    it('it should return 1',()=>{
        expect(minPages([5,3])).toBe(1);
    })

    it('it should return 3',()=>{
        expect(minPages([15,6])).toBe(3);
    })

    it('it should return 9',()=>{
        expect(minPages([46,19])).toBe(9);
    })

    it('it should return 16',()=>{
        expect(minPages([77,45])).toBe(16);
    })
})