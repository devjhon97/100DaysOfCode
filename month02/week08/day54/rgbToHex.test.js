const rgbToHex = require('./rgbToHex.js');

describe('54th challenge #100DaysOfCode',()=>{
    it('it should return #0080c0 hex code',()=>{
        expect(rgbToHex("rgb(0, 128, 192)")).toBe('#0080c0');
    })

    it('it should return #2dffc0 hex code',()=>{
        expect(rgbToHex("rgb(45, 255, 192)")).toBe('#2dffc0');
    })

    it('it should return #000000 hex code',()=>{
        expect(rgbToHex("rgb(0, 0, 0)")).toBe('#000000');
    })

    it('it should return #f5deb3 hex code',()=>{
        expect(rgbToHex("rgb(245, 222, 179)")).toBe('#f5deb3');
    })

    it('it should return #dda0dd hex code',()=>{
        expect(rgbToHex("rgb(221, 160, 221)")).toBe('#dda0dd');
    })
})