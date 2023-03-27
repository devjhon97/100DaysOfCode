const bigWords = require('./bigWords.js');

describe("86th challenge #100DaysOfCode", ()=> {
    it("it should return an abbreviated word", ()=> {
        expect(bigWords("word")).toBe("word");
    })

    it("it should return an abbreviated word", ()=> {
        expect(bigWords("localization")).toBe("l10n");
    })

    it("it should return an abbreviated word", ()=> {
        expect(bigWords("internationalization")).toBe("i18n");
    })

    it("it should return an abbreviated word", ()=> {
        expect(bigWords("pneumonoultramicroscopicsilicovolcanoconiosis")).toBe("p43s");
    })
})