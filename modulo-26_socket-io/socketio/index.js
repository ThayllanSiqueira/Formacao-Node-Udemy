const express = require("express");
const app = express();

const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on('connection', (socket) => {

    socket.on("disconnect", () => {
        console.log("X desconectou: " + socket.id)
    })

    socket.on("boasvindas", (data) => {
        console.log(data);
    })
    socket.on("palavra", (data) => {
        console.log(data);
        socket.emit("resultado", data + " Faz supino com minha rola.")
    })

})

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

http.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})
