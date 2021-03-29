const express = require("express");
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('express-flash');
const cookieParser = require("cookie-parser");

const app = express();

app.set('view engine', 'ejs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use(cookieParser("ohhhhNooooo"));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(flash());

app.get("/", (req, res) => {
    console.log("Server is Runner...");

    var emailError = req.flash("emailError");
    var pontosError = req.flash("pontosError");
    var nomeError = req.flash("nomeError");
    var email = req.flash("email");

    emailError = (emailError == undefined || emailError.length == 0) ? undefined : emailError;
    pontosError = (pontosError == undefined || pontosError.length == 0) ? undefined : pontosError;
    nomeError = (nomeError == undefined || nomeError.length == 0) ? undefined : nomeError;

    email = (email == undefined || email.length == 0) ? undefined : email;
    

    res.render("index", {emailError, pontosError, nomeError, email});
});

app.post("/form", (req, res) => {
    var {email, nome, pontos} = req.body;

    var errEmail, errPontos, errNome;

    if (email == undefined || email == "") {
        errEmail = "O e-mail não pode ser vazio";
    }
    if (pontos == undefined || pontos < 20) {
        errPontos = "Você não pode ter menos de 20 ponstos";
    }
    if(nome == undefined || nome == ""){
        errNome = "O nome não pode ser vazio"
    }

    if (errEmail != undefined || errPontos != undefined || errNome != undefined) {
        req.flash("emailError", errEmail);
        req.flash("pontosError", errPontos);
        req.flash("nomeError", errNome);

        req.flash("email", email);

        res.redirect("/");
    } else {
        res.send("Okay");
    }

});

app.listen(5000, (req, res) =>{
    console.log("Server runner on port 5000")
});