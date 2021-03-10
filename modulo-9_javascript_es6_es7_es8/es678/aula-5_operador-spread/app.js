// Operador Spread

//Copia tudo que tem dentro de um objeto para dentro de outro

var nome = "Thayllan Felipe";
var idade = 27;
var empresa = {
    nome: "Cleversystems",
    cidade: "Brasilia",
    site: "cleversystems.com.br",
    email: "contato@cleversystem.com.br"
}


var user = {
    nome,
    idade,
    ...empresa
}

console.log(user);




