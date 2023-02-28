const balanced_bonus = require('./perfectlyBalanced.js');

describe('59th challenge #100DaysOfCode',()=>{
    it('it should return true',()=>{
        expect(balanced_bonus("xxxyyyzzz")).toBe(true);
    })

    it('it should return true',()=>{
        expect(balanced_bonus("abccbaabccba")).toBe(true);
    })

    it('it should return false',()=>{
        expect(balanced_bonus("xxxyyyzzzz")).toBe(false);
    })

    it('it should return true',()=>{
        expect(balanced_bonus("abcdefghijklmnopqrstuvwxyz")).toBe(true);
    })

    it('it should return false',()=>{
        expect(balanced_bonus("pqq")).toBe(false);
    })

    it('it should return false',()=>{
        expect(balanced_bonus("fdedfdeffeddefeeeefddf")).toBe(false);
    })

    it('it should return true',()=>{
        expect(balanced_bonus("www")).toBe(true);
    })

    it('it should return true',()=>{
        expect(balanced_bonus("x")).toBe(true);
    })

    it('it should return true',()=>{
        expect(balanced_bonus("")).toBe(true);
    })
})
