const sequelize = require('sequelize');

const conexao = new sequelize("projeto_jt", "root", "123", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

module.exports = conexao;