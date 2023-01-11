const binaryTree = require('./binaryTree.js');

describe('challenge 10/100 #100daysofcode',()=>{
    it('it should return 5',()=>{
        expect(binaryTree(3)).toBe(5);
    })
    it('it should return 5',()=>{
        expect(binaryTree(4)).toBe(14);
    })
    it('it should return 5',()=>{
        expect(binaryTree(5)).toBe(42);
    })
})