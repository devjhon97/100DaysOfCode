const XOR = require('./xor.js');

describe('45th challenge #100DaysOfCode',()=>{
    it('it should return 31',()=>{
        expect(XOR(10, 41)).toBe(31);
    })

    it('it should return 351',()=>{
        expect(XOR(69, 420)).toBe(351);
    })

    it('it should return 878067',()=>{
        expect(XOR(12345, 890412)).toBe(878067);
    })

    it('it should return -1',()=>{
        expect(XOR(2, 1)).toBe(-1);
    })

    it('it should return -8',()=>{
        expect(XOR(15, 7)).toBe(-8);
    })
})
