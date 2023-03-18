const nextMove = require('./botSavesThePrincess.js');

describe('77th challenge #100DaysOfCode', ()=>{
    it('it should return path of rescue', ()=>{
        expect(nextMove(5, 4, 3, [['-', '-', '-', '-', '-'],
                                  ['-', '-', '-', '-', '-'],
                                  ['P', '-', '-', '-', '-'],
                                  ['-', '-', '-', '-', '-'], 
                                  ['-', '-', '-', 'B', '-']])).toBe('UP UP LEFT LEFT LEFT ');
    })

    it('it should return path of rescue', ()=>{
        expect(nextMove(6, 0, 0, [['B', '-', '-', '-', '-', '-'],
                                  ['-', '-', '-', '-', '-', '-'],
                                  ['-', '-', '-', '-', '-', '-'],
                                  ['-', '-', '-', '-', '-', '-'], 
                                  ['-', '-', '-', '-', '-', 'P'],
                                  ['-', '-', '-', '-', '-', '-']])).toBe('DOWN DOWN DOWN DOWN RIGHT RIGHT RIGHT RIGHT RIGHT ');
    })

    it('it should return path of rescue', ()=>{
        expect(nextMove(5, 1, 3, [['-', '-', '-', '-'],
                                  ['-', '-', '-', 'B'],
                                  ['P', '-', '-', '-'], 
                                  ['-', '-', '-', '-']])).toBe('Tabela incorreta!');
    })
})