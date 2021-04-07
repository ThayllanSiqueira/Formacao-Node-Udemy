const mongoose = require("mongoose");
const articleModel = require("./article");

mongoose.connect("mongodb://localhost:27017/aprendendoMongo", {useNewUrlParser: true, useUnifiedTopology: true});


const Article = mongoose.model("Article", articleModel);

//Cadastro
/* const artigo = new Article({title: "Que bom", author: "Desc", body: "Meu p na sua mão", special: true, resume:{
    content: "bla bla bla",
    author: "teste"
}});

artigo.save().then(() =>{
    console.log("Dados Salvo");
}).catch(err => {
    console.log(err);
}); */

//Todos os dados
/* Article.find({}).then(articles =>{
    console.log(articles);
}).catch(err => {
    console.log(err);
}); */

//Dado por pesquisa
/* Article.find({'_id':'606e09c620fd9f1168067fc5'}).then(article =>{
    console.log(article);
}).catch(err => {
    console.log(err);
}); */
/* Article.find({'author':'Desc'}).then(article =>{
    console.log(article);
}).catch(err => {
    console.log(err);
}); */
/* Article.find({'resume.author':'teste'}).then(article =>{
    console.log(article);
}).catch(err => {
    console.log(err);
}); */

//Dado por pesquisa unica
/* Article.findOne({'resume.author':'teste'}).then(article =>{
    console.log(article);
}).catch(err => {
    console.log(err);
}); */

//Deletando Dado
/* Article.findByIdAndDelete({'_id':'606e09c620fd9f1168067fc5'}).then(() =>{
    console.log("Deletado");
}).catch(err => {
    console.log(err);
});  */

//Alterando Dados
/* Article.findByIdAndUpdate("606e0810a20a6130e89a0303", {title: "Vue do zero! - TT", author: "Limão", body: "Vue js do zerinho"}).then(() =>{
    console.log("Alterado");
}).catch(err => {
    console.log(err);
}); */

Article.find({}).then(article =>{
    console.log(article);
}).catch(err => {
    console.log(err);
});