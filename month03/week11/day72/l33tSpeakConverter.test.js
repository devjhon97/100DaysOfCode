const l33tSpeakConverter = require('./l33tSpeakConverter.js');

describe('72th challenge #100DaysOfCode', ()=>{
    it('it should return translated text or word to l33tSpeak', ()=>{
        expect(l33tSpeakConverter('storm')).toBe('570R(V)');
    })

    it('it should return translated text or word to l33tSpeak', ()=>{
        expect(l33tSpeakConverter('basic')).toBe('6451C');
    })

    it('it should return translated text or word to l33tSpeak', ()=>{
        expect(l33tSpeakConverter('eleet')).toBe('3L337');
    })

    it('it should return translated text or word to l33tSpeak', ()=>{
        expect(l33tSpeakConverter('wow')).toBe('`//0`//');
    })

    it('it should return translated text or word to l33tSpeak', ()=>{
        expect(l33tSpeakConverter('mom')).toBe('(V)0(V)');
    })
})