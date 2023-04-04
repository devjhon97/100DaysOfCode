const canTransform = require('./superhero.js');

describe("94th challenge #100DaysOfCode", ()=>{
    it("it should verify if transformation is possible.", ()=>{
        expect(canTransform("a", "u")).toBe("Yes!");
    })

    it("it should verify if transformation is possible.", ()=>{
        expect(canTransform("abc", "ukm")).toBe("Yes!");
    })

    it("it should verify if transformation is possible.", ()=>{
        expect(canTransform("akm", "ua")).toBe("No!");
    })

    it("it should verify if transformation is possible.", ()=>{
        expect(canTransform("abhjeukeot", "okrtiapair")).toBe("Yes!");
    })

    it("it should verify if transformation is possible.", ()=>{
        expect(canTransform("oepdmes", "sfjdewq")).toBe("No!");
    })
})