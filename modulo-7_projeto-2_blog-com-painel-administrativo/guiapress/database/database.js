const Sequelize = require("sequelize");
const conn = new Sequelize('guiapress', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = conn;