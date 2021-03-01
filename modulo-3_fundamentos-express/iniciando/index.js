const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Iniciando rota... '/'");
});

app.get("/blog/:artigo?", function(req, res) {
    let artigo = req.params.artigo;
    if (artigo) {
        res.send("Artigo: " + artigo);
    } else {
        res.send("Bem vindo ao blog '/blog'");
    }
});

/* app.get("/canal/youtube", function(req, res) {
    res.send("<h1> Bem vindo ao canal do youtube '/canal/youtube'</h1>");
}); */

app.get("/canal/youtube", function(req, res) {
    var canal = req.query["canal"];
    if (canal) {
        res.send("<h1> Bem vindo ao canal do youtube " + canal + "</h1>");
    } else {
        res.send("<h1> Bem vindo ao canal do youtube !</h1>");
    }
});

app.get("/ola/:nome", function(req, res) {
    let nome = req.params.nome;
    res.send("<h1>Oi " + nome + "!</h1>");
});

app.get("/ola/:nome/:empresa", function(req, res) {
    let nome = req.params.nome;
    let empresa = req.params.empresa;
    res.send("<h1>Oi " + nome + " da " + empresa + "!</h1>");
});

app.listen(4000, function(err) {
    if (err) {
        console.log("Ocorreu um erro!!!");
    } else {
        console.log("Servidor rodando....");
    }
});