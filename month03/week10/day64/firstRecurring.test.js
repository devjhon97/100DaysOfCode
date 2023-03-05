const firstRecurring = require('./firstRecurring.js');

describe('64th challenge #100DaysOfCode', ()=>{
    it('it should return "B"', ()=>{
        expect(firstRecurring("ABCDEBC")).toBe("B");
    })

    it('it should return "B"', ()=>{
        expect(firstRecurring("ABBA")).toBe("B");
    })

    it('it should return "L"', ()=>{
        expect(firstRecurring("CHALLENGE")).toBe("L");
    })

    it('it should return "E"', ()=>{
        expect(firstRecurring("DEVELOPER")).toBe("E");
    })

    it('it should return "R"', ()=>{
        expect(firstRecurring("PROGRAMMING")).toBe("R");
    })

    it('it should return "A"', ()=>{
        expect(firstRecurring("JAVASCRIPT")).toBe("A");
    })
})