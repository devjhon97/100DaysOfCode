const identicalFilter = require('./identicalFilter.js');

describe('55th challenge #100DaysOfCode',()=>{
    it('it should return a filtered array',()=>{
        expect(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"])).toStrictEqual(["aaaaaa", "d", "eeee"]);
    })

    it('it should return a filtered array',()=>{
        expect(identicalFilter(["88", "999", "22", "545", "133"])).toStrictEqual(["88", "999", "22"]);
    })

    it('it should return a filtered array',()=>{
        expect(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"])).toStrictEqual([]);
    })

    it('it should return a filtered array',()=>{
        expect(identicalFilter(["qwerty", "bbc", "asddsa", "uuu", "lol"])).toStrictEqual(["uuu"]);
    })
})