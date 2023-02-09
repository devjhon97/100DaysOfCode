const howManyGames = require("./howManyGames.js");

describe("39th challenge #100DaysOfCode",()=>{
    it('it should return 6',()=>{
        expect(howManyGames(20, 3, 6, 80)).toBe(6);
    })
    
    it('it should return 5',()=>{
        expect(howManyGames(15, 2, 5, 60)).toBe(5);
    })
    
    it('it should return 4',()=>{
        expect(howManyGames(25, 4, 5, 80)).toBe(4);
    })
})