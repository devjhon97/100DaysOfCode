const rainTrapper = require("./rainTrapper.js");

it('How much water it can trap',()=>{
    expect(rainTrapper([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6);
})

it('How much water it can trap',()=>{
    expect(rainTrapper([4,2,0,3,2,5])).toBe(9);
})

it('How much water it can trap',()=>{
    expect(rainTrapper([3,6,3,2,0,3,5,2])).toBe(12);
})