const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const conn = require("./database/database");
const Pergunta = require("./database/Pergunta");

//Database
conn
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados");
    })
    .catch((err) => {
        console.log(err)
    })

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.get("/", (req, res) => {
    Pergunta.findAll({raw: true, order:[
        ['id','DESC']
    ]}).then(perguntas => {
        console.log(perguntas);
        res.render("index", {
            perguntas: perguntas
        });
    })
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    });
    
});

app.listen(8080, () => { console.log("App Rodando..."); });