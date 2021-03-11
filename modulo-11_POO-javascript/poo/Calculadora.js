// Metodos Estaticos
class Calculadora{
    Somar(a, b){
        console.log(a + b);
    }

    static Sub(a, b){
        console.log(a - b);
    }
}

var calc = new Calculadora();

calc.Somar(2,2);
Calculadora.Sub(2,2); // Static não precisa ser instanciado