const { text } = require("body-parser");
const Sequelize = require("sequelize");
const conn = require("./database");

const Resposta = conn.define("respostas", {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Resposta.sync({forece: false});

module.exports = Resposta;