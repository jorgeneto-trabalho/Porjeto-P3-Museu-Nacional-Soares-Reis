const sequelize = require('sequelize');

const conexao = new sequelize("projeto_jt", "root", "", {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: false,
});

module.exports = conexao;