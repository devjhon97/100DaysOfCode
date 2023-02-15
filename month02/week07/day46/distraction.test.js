const preventDistractions = require('./distraction.js');

describe('46th challenge #100DaysOfCode',()=>{
    it('it should return NO!',()=>{
        expect(preventDistractions("vines that butter my eggroll")).toBe("NO!");
    })

    it('it should return NO!',()=>{
        expect(preventDistractions("Hot pictures of Danny DeVito")).toBe("NO!");
    })

    it('it should return Safe watching!',()=>{
        expect(preventDistractions("How to ace BC Calculus in 5 Easy Steps")).toBe("Safe watching!");
    })

    
    it('it should return NO!',()=>{
        expect(preventDistractions("How can i watch animes online")).toBe("NO!");
    })
})