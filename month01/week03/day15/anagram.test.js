const anagram = require('./anagram.js');

describe('Challenge 15/100 #100DaysOfCode',()=>{
    it('it should return true',()=>{
        expect(anagram('anagram','nagaram')).toBe(true);
    })

    it('it should return false',()=>{
        expect(anagram('rat','car')).toBe(false);
    })

    it('it should return true',()=>{
        expect(anagram('listen','silent')).toBe(true);
    })

    it('it should return false',()=>{
        expect(anagram('apple','chair')).toBe(false);
    })

    it('it should return true',()=>{
        expect(anagram('heart','earth')).toBe(true);
    })
})