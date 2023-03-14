const l33tTranslator = require('./l33tspeakTranslator.js');

describe('73th challenge #100DaysOfCode', ()=>{
    it('it should translate l33t to normal dialect', ()=>{
        expect(l33tTranslator('570R(V)')).toBe('storm');
    })

    it('it should translate l33t to normal dialect', ()=>{
        expect(l33tTranslator('(V)0(V)')).toBe('mom');
    })

    it('it should translate l33t to normal dialect', ()=>{
        expect(l33tTranslator('6451C')).toBe('basic');
    })

    it('it should translate l33t to normal dialect', ()=>{
        expect(l33tTranslator('3L337')).toBe('eleet');
    })

    it('it should translate l33t to normal dialect', ()=>{
        expect(l33tTranslator('`//0`//')).toBe('wow');
    })
})