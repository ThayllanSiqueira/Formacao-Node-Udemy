const express = require("express");
const app = express();

app.get("/",(req, res) => {
    res.send("success");
});

app.get("/cor/:pessoa",(req, res) => {
    let pessoa = req.params.pessoa;
    if (pessoa == "victor") {
        res.json({cor: "vermelho"});
    }

});

module.exports = app;