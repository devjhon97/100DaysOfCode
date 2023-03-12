const lightOn = require('./lightOn.js');

describe('71th challenge #100DaysOfCode', ()=>{
    it('it should return 3', ()=>{
        expect(lightOn([[1,3],[2,3],[4,5]])).toBe(3);
    })

    it('it should return 7', ()=>{
        expect(lightOn([[2,4],[3,6],[1,3],[6,8]])).toBe(7);
    })

    it('it should return 5', ()=>{
        expect(lightOn([[6,8],[5,8],[8,9],[5,7],[4,7]])).toBe(5);
    })

    it('it should return 6', ()=>{
        expect(lightOn([[2,5],[1,4],[5,7],[1,5],[4,6]])).toBe(6);
    })
})