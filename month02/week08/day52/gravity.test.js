const switchGravityOn = require('./gravity.js');

describe('52th challenge #100DaysOfCode',()=>{
    it('it should return a new array with gravity switched on',()=>{
        expect(switchGravityOn([
            ["-", "#", "#", "-"],
            ["-", "-", "-", "-"],
            ["-", "-", "-", "-"],
            ["-", "-", "-", "-"]
          ])).toStrictEqual([
            ["-", "-", "-", "-"],
            ["-", "-", "-", "-"],
            ["-", "-", "-", "-"],
            ["-", "#", "#", "-"]
          ]);
    })

    it('it should return a new array with gravity switched on',()=>{
        expect(switchGravityOn([
            ["-", "#", "#", "-"],
            ["-", "-", "#", "-"],
            ["-", "-", "-", "-"],
          ])).toStrictEqual([
            ["-", "-", "-", "-"],
            ["-", "-", "#", "-"],
            ["-", "#", "#", "-"]
          ]);
    })

    it('it should return a new array with gravity switched on',()=>{
        expect(switchGravityOn([
            ["-", "#", "#", "#", "#", "-"],
            ["#", "-", "-", "#", "#", "-"],
            ["-", "#", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-"]
          ])).toStrictEqual([
            ["-", "-", "-", "-", "-", "-"],
            ["-", "-", "-", "-", "-", "-"],
            ["-", "#", "-", "#", "#", "-"],
            ["#", "#", "#", "#", "#", "-"]
          ]);
    })
})