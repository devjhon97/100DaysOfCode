const maximumValue = require("./maximumValue.js");

describe('30th challenge #100DaysOfCode',()=>{
    it('it should return 3276',()=>{
        expect(maximumValue(276,3)).toBe(3276);
    })

    it('it should return -4999',()=>{
        expect(maximumValue(-999,4)).toBe(-4999);
    })

    it('it should return 30',()=>{
        expect(maximumValue(0,3)).toBe(30);
    })

    it('it should return 8760',()=>{
        expect(maximumValue(860,7)).toBe(8760);
    })

    it('it should return 934952',()=>{
        expect(maximumValue(934952,7)).toBe(9734952);
    })
})