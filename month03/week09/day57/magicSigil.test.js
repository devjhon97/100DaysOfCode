const sigilize = require('./magicSigil.js');

describe('57th challenge #100DaysOfCode',()=>{
    it('it should return the glyph: MLTHY',()=>{
        expect(sigilize("i am healthy")).toBe("MLTHY");
    })

    it('it should return the glyph: FNDYSLMT',()=>{
        expect(sigilize("I FOUND MY SOULMATE")).toBe("FNDYSLMT");
    })

    it('it should return the glyph: HVBJNDTPYSWL',()=>{
        expect(sigilize("I have a job I enjoy and it pays well")).toBe("HVBJNDTPYSWL");
    })

    it('it should return the glyph: 10YSFCD',()=>{
        expect(sigilize("100 days of code")).toBe("10YSFCD");
    })
})