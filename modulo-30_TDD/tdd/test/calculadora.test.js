let app = require("../app");

describe("Operações basicas", () => {
    test("Deve retornar o valor 10 ao somar 5 + 5", () => {
        let resultado = app.soma(5,5);
        expect(resultado).toEqual(10);
    });
    
    test("Deve retornar o valor 10 ao multiplicar 2 x 5", () => {
        let result = app.mult(2,5);
        expect(result).toEqual(10);
    })
});





