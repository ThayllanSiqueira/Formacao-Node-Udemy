// Find

var thayllan = {
    nome: "Thayllan Felipe",
    empresa: "Cleversystems"
}

var victor = {
    nome: "Victor Lima",
    empresa: "Guia do programador"
}

var erik = {
    nome: "Erik Fig",
    empresa: "Udemy"
}

var users = [thayllan, victor, erik];

// Filter - retorna um novo array onde as condições são verdadeiras 
// forEach - percorre o array

//Find - Pesquisa um registro dentro de um array

var usuario = users.find(user => user.nome === "Thayllan Felipe") // verificar();
console.log(usuario);
