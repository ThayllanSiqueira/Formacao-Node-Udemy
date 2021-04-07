const express = require("express");
const app = express();

const http = require("http").createServer(app);
const io = require("socket.io")(http);

// allow-cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

io.on('connection', (socket) => {

    socket.on("disconnect", () => {
        console.log("X desconectou: " + socket.id)
    })
    socket.on("msg", (data) => {
        console.log(data);
        io.emit("showmsg", data);
    })

   

})

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

http.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})
