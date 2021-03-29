const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const jwtSecret = "asdfasdfjaçlskdjfçlaksd";

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

function auth(req, res, next){
    const authToken = req.headers['authorization'];
    if (authToken != undefined) {
        const bearer = authToken.split(" ");
        var token = bearer[1];

        jwt.verify(token, jwtSecret, (err, data) => {
            if (err) {
                res.status(401);
                res.json({err: "Token inválido!"});
            } else {
                req.token = token;
                req.loggedUser = {id: data.id, email: data.email};
                next();
            }
        });
    } else {
        res.status(401);
        res.json({err: "Token inválido!"});
    }
   
}

var DB = {
    games: [
        {
            id: 23,
            title: "Call of duty MW",
            year: 2019,
            price: 60
        },
        {
            id: 2,
            title: "Minecraft",
            year: 2012,
            price: 20
        },
        {
            id: 65,
            title: "Sea of Thieves",
            year: 2018,
            price: 40
        }
    ],
    users: [
        {
            id: 1,
            name: "Thayllan Felipe",
            email: "thayllan@clever.com",
            password: "123456"
        },
        {
            id: 5,
            name: "Victor Lima",
            email: "victor@mail.com",
            password: "123456"
        }
    ]
}

app.get("/", (req, res) => {
    res.send("Api funcionando....");
});

app.get("/games", auth, (req, res) => {

    var HATEOAS = [
        {
            href: "http://localhost:8166/game/0",
            method: "DELETE",
            rel: "delete_game"
        },
        {
            href: "http://localhost:8166/game/0",
            method: "GET",
            rel: "get_game"
        },
        {
            href: "http://localhost:8166/auth",
            method: "POST",
            rel: "login"
        }
    ]

    res.statusCode = 200;
    res.json({games: DB.games, _links: HATEOAS})
});

app.get("/game/:id", (req, res) => {
    var id = req.params.id;

    if (isNaN(id)) {
        res.sendStatus(400);
    } else {
        id = parseInt(id);

        var HATEOAS = [
            {
                href: "http://localhost:8166/game/" + id,
                method: "DELETE",
                rel: "delete_game"
            },
            {
                href: "http://localhost:8166/game/" + id,
                method: "GET",
                rel: "get_game"
            },
            {
                href: "http://localhost:8166/games",
                method: "GET",
                rel: "get_all_games"
            }
        ]

        var game = DB.games.find(g => g.id == id);
        if (game != undefined) {
            res.statusCode = 200;
            res.json({game: game, _links: HATEOAS});
        } else {
            res.sendStatus(404);
        }
    }

});

app.post("/game", auth, (req, res) => {
    var {title, price, year} = req.body;

    //validate

    DB.games.push({
        id: 8,
        title,
        price,
        year
    });

    res.sendStatus(200);

});

app.delete("/game/:id", (req, res) => {
     var id = req.params.id;

     if (isNaN(id)) {
        res.sendStatus(400);
    } else {
        id = parseInt(id);
        var index = DB.games.findIndex(g => g.id == id);

        if (index == -1) {
            res.sendStatus(404);
        } else {
            DB.games.splice(index,1);
            res.sendStatus(200);
        }
        
    }

});

app.put("/game/:id", (req, res) => {
    var id = req.params.id;

    if (isNaN(id)) {
        res.sendStatus(400);
    } else {
        id = parseInt(id);
        var game = DB.games.find(g => g.id == id);
        if (game != undefined) {
            var {title, price, year} = req.body;

            if (title != undefined) {
                game.title = title;
            }
            if (price != undefined) {
                game.price = price;
            }
            if (year != undefined) {
                game.year = year;
            }
            
            res.sendStatus(200);

        } else {
            res.sendStatus(404);
        }
    }


});

app.post("/auth", (req, res) =>{
    var {email, password} = req.body;
    if (email != undefined) {
        var user = DB.users.find(u => u.email == email);
        if (user != undefined) {
            if(user.password == password){

                jwt.sign({id: user.id, email: user.email}, jwtSecret, {expiresIn: '48h'}, (err, token) =>{
                    if (err) {
                        res.status(400);
                        res.json({err: "Falha interna"});
                    } else {
                        res.status(200);
                        res.json({token: token});
                    }
                });

                
            } else {
                res.status(401);
                res.json({err: "Credenciais Inválidas"});
            }
        } else {
            res.status(404);
            res.json({err: "O email enviado não existe"});
        }
    } else {
        res.status(400);
        res.json({err: "O email enviado é invalido"});
    }
});

app.listen(8166, () => {
    console.log("Api runner...");
});