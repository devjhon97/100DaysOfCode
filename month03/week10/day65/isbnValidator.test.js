const ISBNvalidator = require('./isbnValidator.js');

describe('65th challenge #100DaysOfCode', ()=>{
    it('it should return true', ()=>{
        expect(ISBNvalidator("0-7475-3269-9")).toBe(true);
    })

    it('it should return false', ()=>{
        expect(ISBNvalidator("0-5323-9241-10")).toBe(false);
    })

    it('it should return false', ()=>{
        expect(ISBNvalidator("0-8586-4571-4")).toBe(false);
    })

    it('it should return true', ()=>{
        expect(ISBNvalidator("0-1834-9833-10")).toBe(true);
    })
})