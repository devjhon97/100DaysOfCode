const ticTacToe = require('./ticTacToe.js');

describe('50th challenge #100DaysOfCode',()=>{
    it("it should return a player 1's victory message",()=>{
        expect(ticTacToe([
            ["X", "O", "O"],
            ["O", "X", "O"],
            ["O", "#", "X"]
          ])).toBe('Player 1 Wins!');
    })

    it("it should return a player 2's victory message",()=>{
        expect(ticTacToe([
            ["X", "O", "O"],
            ["O", "X", "O"],
            ["X", "#", "O"]
          ])).toBe('Player 2 Wins!');
    })

    it("it should return a tie message",()=>{
        expect(ticTacToe([
            ["X", "X", "O"],
            ["O", "X", "O"],
            ["X", "O", "#"]
          ])).toBe("It's a tie!");
    })

    it("it should return a player 2's victory message",()=>{
        expect(ticTacToe([
            ["X", "#", "X"],
            ["X", "X", "O"],
            ["O", "O", "O"]
        ])).toBe("Player 2 Wins!");
    })
})