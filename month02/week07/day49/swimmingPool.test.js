const isLegitimate = require('./swimmingPool.js');

describe('49th challenge #100DaysOfCode',()=>{
    it('it should return true',()=>{
        expect(isLegitimate([
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
          ])).toBe(true);
    })

    it('it should return false',()=>{
        expect(isLegitimate([
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0, 0]
          ])).toBe(false);
    })
    
    it('it should return true',()=>{
        expect(isLegitimate([
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0]
          ])).toBe(true);
    })

    it('it should return false',()=>{
        expect(isLegitimate([
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ])).toBe(false);
    })
})