var database = require("./database");

//INSERT
/* var dados = [
    {
    nome: "Call of Duty 2",
    preco: 60
    },
    {
        nome: "GTA",
        preco: 45.99
    },
    {
        nome: "Wow",
        preco: 120
    }
]

database.insert(dados).into("games").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
});
 */

// SELECT
/* database.select().table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
}); */

/* database.select(["id", "nome"]).table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
}); */

// SELECT WHERE
/* database
//.where({nome: "GTA"})
//.orWhere({id: 2})
.whereRaw("nome = 'GTA' OR preco > 20")
.table("games")
.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
}); */

// QUERY SQL
/* database.raw("select * FROM games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
}); */

//DELETE
/* database.where({id: 3}).delete().table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});  */

//UPDATE
/* database.where({id: 5}).update({preco: 35.99}).table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
}); */

//ORDER BY
/* database.select().table("games").orderBy("nome", "asc").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
}); */

//Insert Associados
/* database.insert({
    nome: "Blizzard",
    games_id: 5
}).table("estudios").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
}); */

//JOINS
/* database.select(["estudios.nome as name_estudio","games.id","games.nome as name_game"]).table("games").innerJoin("estudios","estudios.games_id","games.id").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
}); */
/* database.select(["games.*","estudios.nome as name_estudio"]).table("games").innerJoin("estudios","estudios.games_id","games.id").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
}); */

//JOIN COM WHERE
/* database.select(["games.*","estudios.nome as name_estudio"]).table("games").innerJoin("estudios","estudios.games_id","games.id").where("games.id",5).then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
});  */

//