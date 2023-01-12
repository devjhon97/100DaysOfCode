const IPaddress = require('./IPaddress.js');

describe('challenge 11/100 #100DaysOfCode',()=>{
    it('it should return 2 valid IP',()=>{
        expect(IPaddress('25525511135')).toEqual(['255.255.11.135','255.255.111.35']);
    })

    it('it should return 1 valid IP',()=>{
        expect(IPaddress('0000')).toEqual(['0.0.0.0']);
    })

    it('it should return 1 valid IP',()=>{
        expect(IPaddress('1111')).toEqual(['1.1.1.1']);
    })

    it('it should return 2 valid IP',()=>{
        expect(IPaddress('010010')).toEqual(['0.10.0.10','0.100.1.0']);
    })

    it('it should return 5 valid IP',()=>{
        expect(IPaddress('101023')).toEqual(['1.0.10.23','1.0.102.3','10.1.0.23','10.10.2.3','101.0.2.3']);
    })

    it("it shouldn't return IP",()=>{
        expect(IPaddress('235039394')).toEqual('Não foi possivel fazer nenhuma combinação!');
    })
})