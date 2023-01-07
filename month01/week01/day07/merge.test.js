const merge = require("./merge.js");

it('it should return a sorted array',()=>{
    expect(merge([1,2,3,0,0,0],[2,5,6])).toEqual([1,2,2,3,5,6]);
})