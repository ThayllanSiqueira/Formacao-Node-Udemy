// Arrow Function

// Diferença apenas na escrita - reduz a quantidade de escrita + alguns recursos de OO
// Apenas podem ser usadas em callbacks ou guardada em variáveis

//Forma convencional
function soma(a,b){
    console.log(a + b);
}

//Guardando em uma variavel
var mult = function(a,b){
    console.log(a * b);
}

//Arrow function
var mult3 = (a,b,c) => {
    console.log(a*b*c);
}

//Arrow function Apenas com um parametro
var mult3one = a => {
    console.log(a*a*a);
}

// Arrow function Reduzida
var soma3redux = a => console.log(a+a+a);

/* Função com retorno */

//Forma convencional
function somaret(a,b){
    return a + b;
}

//Guardando em uma variavel
var mult = function(a,b){
    return a * b;
}

console.log(somaret(2,2));

//Arrow function
var mult3ret = (a,b,c) => {
    return a*b*c;
}

var result = mult3ret(2,3,4);
console.log(result)


//Arrow function reduzida
var mult3retRedux = (a,b,c) => a*b*c;

var result2 = mult3retRedux(5,5,5);
console.log(result2)

