const toHex = require('./stringToHex.js');

describe('56th challenge #100DaysOfCode',()=>{
    it('it should return the string translated to hex code',()=>{
        expect(toHex("hello world")).toBe("68 65 6c 6c 6f 20 77 6f 72 6c 64 ");
    })

    it('it should return the string translated to hex code',()=>{
        expect(toHex("Big Boi")).toBe("42 69 67 20 42 6f 69 ");
    })

    it('it should return the string translated to hex code',()=>{
        expect(toHex("Marty Poppinson")).toBe("4d 61 72 74 79 20 50 6f 70 70 69 6e 73 6f 6e ");
    })

    it('it should return the string translated to hex code',()=>{
        expect(toHex("100 days of code")).toBe("31 30 30 20 64 61 79 73 20 6f 66 20 63 6f 64 65 ");
    })
})