const freePrisioners = require('./prisonbreak.js');

describe('challenge 17/100 #100DaysOfCode',()=>{
    it('it should return 4',()=>{
        expect(freePrisioners([1,1,0,0,0,1,0])).toBe(4);
    })

    it('it should return 1',()=>{
        expect(freePrisioners([1,1,1])).toBe(1);
    })

    it('it should return 0',()=>{
        expect(freePrisioners([0,0,0])).toBe(0);
    })

    it('it should return 0',()=>{
        expect(freePrisioners([0,1,1,1])).toBe(0);
    })
})