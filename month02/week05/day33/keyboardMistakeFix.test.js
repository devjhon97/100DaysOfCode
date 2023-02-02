const keyboardMistakeFix = require("./keyboardMistakeFix.js");

describe("33th challenge #100DaysOfCode",()=>{
    it('it should return \'I AM FINE TODAY\' string',()=>{
        expect(keyboardMistakeFix("O S, GOMR YPFSU/")).toBe("I AM FINE TODAY.");
    })

    it('it should return \'JAVASCRIPT LANGUAGE\' string',()=>{
        expect(keyboardMistakeFix("KSBSDVTO[Y ;SMHISHR")).toBe("JAVASCRIPT LANGUAGE");
    })

    it('it should return \'100 DAYS OF CODE\' string',()=>{
        expect(keyboardMistakeFix("2-- FSUD PG VPFR")).toBe("100 DAYS OF CODE");
    })
})