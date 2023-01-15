const encrypt = require("./karacaalgorithm.js");

describe('Challenge 14/100 #100DaysOfCode',()=>{
    it('it should return a encrypted word',()=>{
        expect(encrypt('apple')).toBe('1lpp0aca');
    })

    it('it should return a encrypted word',()=>{
        expect(encrypt('banana')).toBe('0n0n0baca');
    })

    it('it should return a encrypted word',()=>{
        expect(encrypt('karaca')).toBe('0c0r0kaca');
    })

    it('it should return a encrypted word',()=>{
        expect(encrypt('burak')).toBe('k0r3baca');
    })

    it('it should return a encrypted word',()=>{
        expect(encrypt('alpaca')).toBe('0c0pl0aca');
    })
})