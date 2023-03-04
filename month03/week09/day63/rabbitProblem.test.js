const rabbitProblem = require('./rabbitProblem.js');

describe('63th challenge #100DaysOfCode', ()=>{
    it('it should return 32 months', ()=>{
        expect(rabbitProblem(2, 4, 1000000000)).toBe(32);
    })

    it('it should return 36 months', ()=>{
        expect(rabbitProblem(2, 4, 15000000000)).toBe(36);
    })

    it('it should return 41 months', ()=>{
        expect(rabbitProblem(1, 1, 70000000000)).toBe(41);
    })
})