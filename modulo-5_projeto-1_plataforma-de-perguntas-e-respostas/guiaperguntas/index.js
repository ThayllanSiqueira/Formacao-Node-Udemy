const express = require("express");
const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.send("Bem vindo ao site!");
});

app.listen(8080, () => { console.log("App Rodando..."); });