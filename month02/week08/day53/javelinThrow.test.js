const javelinThrow = require('./javelinThrow.js');

describe('53th challenge #100DaysOfCode', ()=>{
    it('it should return 34m height, 137m range',()=>{
        expect(javelinThrow(36.7, 45)).toBe('Ymax=34m, Xmax=137m');
    })

    it('it should return 16m height, 172m range',()=>{
        expect(javelinThrow(51.3, 20)).toBe('Ymax=16m, Xmax=172m');
    })

    it('it should return 511m height, 37m range',()=>{
        expect(javelinThrow(100.1, 89)).toBe('Ymax=511m, Xmax=37m');
    })
})