const hulkFeelings = require('./hulkFeelings.js');

describe('87th challenge #100DaysOfCode', ()=> {
    it('it should return hulk feelings', ()=> {
        expect(hulkFeelings(3)).toEqual("I hate that i love that i hate it\n");
    })

    it('it should return hulk feelings', ()=> {
        expect(hulkFeelings(1)).toEqual("I hate it\n");
    })

    it('it should return hulk feelings', ()=> {
        expect(hulkFeelings(6)).toEqual("I hate that i love that i hate that i love that i hate that i love it\n");
    })

    it('it should return hulk feelings', ()=> {
        expect(hulkFeelings(10)).toEqual("I hate that i love that i hate that i love that i hate that i love that i hate that i love that i hate that i love it\n");
    })
})
