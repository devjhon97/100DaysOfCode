const landscape = require('./landscape.js');

describe('challenge 12/100 #100DaysOfCode',()=>{
    it('it should be a mountain ',()=>{
        expect(landscape([3, 4, 5, 4, 3])).toBe('Mountain');
    })
    
    it('it should be a valley ',()=>{
        expect(landscape([9, 7, 3, 1, 2, 4])).toBe('Valley');
    })

    it('it should be a valley',()=>{
        expect(landscape([10, 9, 8, 7, 2, 3, 4, 5])).toBe('Valley');
    })

    it('it should be a mountain',()=>{
        expect(landscape([1, 3, 5, 4, 3, 2])).toBe('Mountain');
    })

    it('it should be a valley',()=>{
        expect(landscape([350, 100, 200, 400, 700])).toBe('Valley');
    })

    it('it should be neither mountain nor valley',()=>{
        expect(landscape([9, 8, 9, 8])).toBe('Neither');
    })
})