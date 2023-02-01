const playerRank = require("./climbingTheLeaderboard.js");

describe('32th challenge #100DaysOfCode',()=>{
    it('it should return 4,3,1',()=>{
        expect(playerRank([100,90,90,80],[70,80,105])).toStrictEqual([4,3,1]);
    })

    it('it should return 1,1,1',()=>{
        expect(playerRank([100,90,90,80],[106,107,105])).toStrictEqual([1,1,1]);
    })

    it('it should return 2,4,3,1,2',()=>{
        expect(playerRank([120,110,105,100],[115,100,105,125,110])).toStrictEqual([2,4,3,1,2]);
    })

    it('it should return 4,2,1,3,1',()=>{
        expect(playerRank([90,75,75,65],[55,80,105,65,95])).toStrictEqual([4,2,1,3,1]);
    })
})