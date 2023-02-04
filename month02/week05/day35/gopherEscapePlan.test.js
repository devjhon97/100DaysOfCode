const gopherEscapePlan = require("./gopherEscapePlan.js");

describe('35th challenge #100DaysOfCode',()=>{
    it('it should return a success gopher escaped message',()=>{
        expect(gopherEscapePlan('assets/escape.txt')).toEqual('The gopher can escape through the 2º hole at (2.5,2.5)\n');
    })

    it('it should return a gopher cannot escaped message',()=>{
        expect(gopherEscapePlan('assets/cannotescape.txt')).toEqual('The gopher cannot escape the dog\n');
    })

    it('it should return a bad file message',()=>{
        expect(gopherEscapePlan('assets/badfile.txt')).toEqual('BAD FILE!');
    })
})