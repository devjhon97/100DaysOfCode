const trafficLights = require("./trafficLights.js");

describe('29th Challenge #100DaysOfCode',()=>{
    it('it should return an accepted sequence message',()=>{
        expect(trafficLights("R G Y R C R G Y R")).toStrictEqual("ACCEPT!");
    })

    it('it should return a rejected sequence message',()=>{
        expect(trafficLights("G Y R G Y R")).toStrictEqual("REJECT!");
    })

    it('it should return a rejected sequence message',()=>{
        expect(trafficLights("R Y G P")).toStrictEqual("REJECT!");
    })

    it('it should return an error sequence message',()=>{
        expect(trafficLights("R G Y")).toStrictEqual("ERROR!");
    })

    it('it should return an error sequence message',()=>{
        expect(trafficLights("X 8 S")).toStrictEqual("ERROR!");
    })

    it('it should return an error sequence message',()=>{
        expect(trafficLights("R G Y R C R P R G Y R G Y R G Y R G Y R")).toStrictEqual("ERROR!");
    })
})