const Sequelize = require("sequelize");
const conn = new Sequelize('guiapress', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        charset: 'utf8'
    }
});

module.exports = conn;