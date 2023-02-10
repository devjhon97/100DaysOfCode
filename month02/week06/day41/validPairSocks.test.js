const pairOfSocks = require('./validPairSocks.js');

describe('41th challenge #100DaysOfCode',()=>{
    it('it should return 2',()=>{
        expect(pairOfSocks([1,2,1,2,1,3,2])).toBe(2);
    })
    
    it('it should return 5',()=>{
        expect(pairOfSocks([3,2,3,1,5,2,4,6,4,1,7,4,6])).toBe(5);
    })

      
    it('it should return 0',()=>{
        expect(pairOfSocks([1,2,3,4,5,6])).toBe(0);
    })

      
    it('it should return 4',()=>{
        expect(pairOfSocks([4,3,2,1,1,2,3,4])).toBe(4);
    })
})