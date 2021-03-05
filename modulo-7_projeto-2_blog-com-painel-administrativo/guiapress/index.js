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
    Article.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then(articles => {
        Category.findAll().then(categories => {
            res.render("index",{articles: articles, categories: categories});
        });
    });
});

app.get("/:slug", (req, res) => {
    var slug = req.params.slug;
    
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(article => {
        if(article != undefined){
            Category.findAll().then(categories => {
                res.render("article",{article: article, categories: categories});
            });
        } else {
            res.redirect("/");
        }
    }).catch( err => {
        res.redirect("/")
    });
});

app.get("/category/:slug", (req, res) => {
    var slug = req.params.slug;
    
    Category.findOne({
        where: {
            slug: slug
        },
        include: [{ model: Article}]
    }).then(category => {
        if(category != undefined){
            Category.findAll().then(categories => {
                res.render("index",{articles: category.articles, categories: categories});
            });
        } else {
            res.redirect("/");
        }
    }).catch( err => {
        res.redirect("/")
    });
});


app.listen(8080, ()=>{
    console.log("Server runner....");
});