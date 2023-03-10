const Clarence = require('./clarence.js');

describe('68th challenge #100DaysOfCode', ()=>{
    it('it should return 27.38',()=>{
        expect(Clarence("219.45.143.143")).toBe(27.38);
    })

    it('it should return 11.3',()=>{
        expect(Clarence("7.8.5.1")).toBe(11.3);
    })

    it('it should return 17.57',()=>{
        expect(Clarence("0.42.42.42")).toBe(17.57);
    })

    it('it should return 13.42',()=>{
        expect(Clarence("999.999.999.999")).toBe(13.42);
    })
})