const timeInWords = require('./timeInWords.js');

describe('31th challenge #100DaysOfCode',()=>{
    it('it should return the cursive time informed!',()=>{
        expect(timeInWords(5,47)).toEqual('thirteen minutes to six');
    })

    it('it should return the cursive time informed!',()=>{
        expect(timeInWords(3,0b00)).toEqual("three o'clock");
    })

    it('it should return the cursive time informed!',()=>{
        expect(timeInWords(7,15)).toEqual('quarter past seven');
    })

    it('it should return the cursive time informed!',()=>{
        expect(timeInWords(5,30)).toEqual('half past five');
    })

    it('it should return the cursive time informed!',()=>{
        expect(timeInWords(5,0b01)).toEqual('one minute past five');
    })

    it('it should return the cursive time informed!',()=>{
        expect(timeInWords(11,38)).toEqual('twenty two minutes to noon');
    })

    it('it should return the cursive time informed!',()=>{
        expect(timeInWords(2,19)).toEqual('nineteen minutes past two');
    })
})