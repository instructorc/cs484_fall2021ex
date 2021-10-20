

var numberFunctions = require('./favoriteNumber');

describe("testing favoriteNum input functionality", ()=>{
    
    
    //Normal Usage
    test("testing input range", ()=>{

        //Arange and Act for upper and lower range
        var aValue = numberFunctions.getFavoriteNum(44);
    
        //Assert
        expect(aValue).toBeGreaterThanOrEqual(1);
        expect(aValue).toBeLessThanOrEqual(100);
    })
    
    //Erraneous Input
    test("inputing a value out range", ()=>{
    
        //Arange and Act for upper and lower range
        var aValue = numberFunctions.getFavoriteNum(111);
    
        //Assert
        expect(aValue).toBe(-1);
        //expect(aValue).toBeLessThanOrEqual(1);
    })




})

