const asteroids = require('./asteroids.js');

describe('51th challenge #100DaysOfCode',()=>{
    it("it should return asteroids's new state",()=>{
        expect(asteroids([5, 10, -5])).toStrictEqual([5, 10]);
    })

    it("it should return asteroids's new state",()=>{
        expect(asteroids([8, -8])).toStrictEqual([]);
    })

    it("it should return asteroids's new state",()=>{
        expect(asteroids([10, 2, -5])).toStrictEqual([10]);
    })

    it("it should return asteroids's new state",()=>{
        expect(asteroids([-2, -1, 1, 2])).toStrictEqual([-2, -1, 1, 2]);
    })
})