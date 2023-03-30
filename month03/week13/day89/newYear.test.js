const newYear = require('./newYear.js');

describe('89th challenge #100DaysOfCode', ()=>{
    it('it should return left minutes for new year', ()=>{
        expect(newYear(23, 55)).toBe(5);
    })

    it('it should return left minutes for new year', ()=>{
        expect(newYear(23, 0)).toBe(60);
    })

    it('it should return left minutes for new year', ()=>{
        expect(newYear(0, 1)).toBe(1439);
    })

    it('it should return left minutes for new year', ()=>{
        expect(newYear(4, 20)).toBe(1180);
    })

    it('it should return left minutes for new year', ()=>{
        expect(newYear(23, 59)).toBe(1);
    })
})