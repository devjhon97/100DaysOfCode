const funnyPlant = require('./funnyPlant.js');

describe('62th challenge #100DaysOfCode',()=>{
    it('it should return 5',()=>{
        expect(funnyPlant(200, 15)).toBe(5);
    })

    it('it should return 14',()=>{
        expect(funnyPlant(50000, 1)).toBe(14);
    })

    it('it should return 9',()=>{
        expect(funnyPlant(150000, 250)).toBe(9);
    })

    it('it should return 11',()=>{
        expect(funnyPlant(300000, 45)).toBe(11);
    })
})