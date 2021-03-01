const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/:nome/:lang", (req, res) => {
    //res.send("Bem vindo ao site!");
    let nome = req.params.nome;
    let lang = req.params.lang;
    let exibirMsg = true;

    var produtos = [
        {nome: "Doritos",preco: 3.14},
        {nome: "Coca-cola",preco:5},
        {nome: "Leite",preco:1.45},
        {nome: "Carne", preco:15},
        {nome: "Redbull", preco: 6},
        {nome: "Nescau", preco: 4}
    ]

    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Cleversystems",
        inscritos: 100000,
        msg: exibirMsg,
        produtos: produtos
    });
});

app.listen(8080, () => { console.log("App Rodando..."); });