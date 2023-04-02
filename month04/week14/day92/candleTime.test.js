const candleTime = require('./candleTime.js');

describe("92th challenge #100DaysOfCode", ()=>{
    it('it should return the burning candle hour ', ()=>{
        expect(candleTime(4, 2)).toBe(7);
    })

    it('it should return the burning candle hour ', ()=>{
        expect(candleTime(6, 3)).toBe(8);
    })

    it('it should return the burning candle hour ', ()=>{
        expect(candleTime(8, 4)).toBe(10);
    })
})