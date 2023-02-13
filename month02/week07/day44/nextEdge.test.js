const nextEdge = require('./nextEdge.js');

describe('44th challenge #100DaysOfCode',()=>{
    it('it should return 17',()=>{
        expect(nextEdge(8, 10)).toBe(17);
    })

    it('it should return 11',()=>{
        expect(nextEdge(5, 7)).toBe(11);
    })

    it('it should return 10',()=>{
        expect(nextEdge(9, 2)).toBe(10);
    })
})