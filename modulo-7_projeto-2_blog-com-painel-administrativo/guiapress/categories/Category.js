const Sequelize = require("sequelize");
const conn = require("../database/database");

const Category = conn.define('categores', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Category.sync({force: true});

module.exports = Category;