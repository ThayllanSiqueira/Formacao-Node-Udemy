const fs = require("fs");

//Leitura de arquivo
/* fs.readFile("./thay.llan",{encoding: "utf-8"}, (err, dados) => {
    if(err){
        console.log("Deu erro...");
    } else {
        console.log(dados);
    }
}); */

// Escrever em arquivo
/* fs.writeFile("./darlam.felope","Nome: Darlam Felope", (err) => {
    if(err){
        console.log("Deu erro...");
    } 
}); */

// Lendo Json
fs.readFile("./usuario.json",{encoding: "utf-8"}, (err, dados) => {
    if(err){
        console.log("Deu erro...");
    } else {
        console.log(dados);
        var conteudo = JSON.parse(dados);
        conteudo.nome = "Thayllan Felipe";
        conteudo.curso = "Javascript";
        conteudo.categoria = "Javascript";
        console.log(conteudo);

        fs.writeFile("./usuario.json", JSON.stringify(conteudo), err => {
            if(err){
                console.log("Houve um error.");
            }
        });
    }
});