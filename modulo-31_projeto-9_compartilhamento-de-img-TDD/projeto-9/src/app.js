let express = require("express");
let app = express();
let mongoose = require("mongoose");
let user = require("./models/User");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
let secret = "açslkdfahgtabsd^^^::??>><<<<lfçasdir894687q67894j2486.7/*//*+.-,,,/;";

app.use(express.urlencoded({extended: false}));
app.use (express.json());

mongoose.connect("mongodb://localhost:27017/guiapics",{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    //console.log("Conectado ao banco");
})
.catch(err => {
    console.log(err);
});

let User = mongoose.model("User", user);

app.get("/", (req, res) => {
    res.json({});
});

app.post("/user", async (req, res) => {
    var {name, email, password} = req.body;
    if (name == "" || email == "" || password == "") {
        res.sendStatus(400);
        return;
    }

    try {
        let user = await User.findOne({email});
        if(user != undefined){
            res.statusCode = 400;
            res.json({error: "E-mail já cadastrado"});
            return;
        }

        let salt = await bcrypt.genSalt(10);
        let hash = await bcrypt.hash(password, salt)


        let newUser = new User({name, email, password: hash})
        newUser.save();
        res.json({email});
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.post("/auth", async (req, res) => {
    var {email, password} = req.body;
    
    try {
        let user = await User.findOne({email});
        if (user == undefined) {
            res.statusCode = 403;
            res.json({errors: {email: "E-mail não cadastrado"}})
            return;
        }

        let isPasswordRight = await bcrypt.compare(password, user.password);

        if (!isPasswordRight) {
            res.statusCode = 403;
            res.json({errors: {password: "Senha incorreta"}})
            return;
        }
    } catch (err) {
        console.log(err);
        
    }

    jwt.sign({email, name: user.name, id: user._id}, secret, {expiresIn: '48h'}, (err, token) => {
        if(err){
            console.log(err);
            res.sendStatus(500);
        } else {
            res.json({token});
        }
    });
})

app.delete("/delete/:email", async (req, res) => {
    var email = req.params.email;
    try {
        await User.deleteOne({email});
        res.sendStatus(200);
    } catch (err) {
        console.log(err)   
    }
})

module.exports = app;