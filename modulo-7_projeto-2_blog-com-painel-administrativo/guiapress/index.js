// importando modulos
const express = require("express");
const bodyParser = require("body-parser");
const conn = require("./database/database");

// controllers
const categoriesController = require("./categories/CategoriesController")
const articlesController = require("./articles/ArticlesController")

// models
const Article = require("./articles/Article");
const Category = require("./categories/Category");

// Inicializando o express
const app = express();

// View Engine
app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));

//Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Database
conn.authenticate()
    .then(() =>{
        console.log("Conectado ao Banco de Dados...");
    })
    .catch(err => {
        console.log(err);
    });


//Rotas
app.use("/", categoriesController);
app.use("/", articlesController);

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(8080, ()=>{
    console.log("Server runner....");
});