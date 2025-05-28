const sequelize = require("sequelize");
const conexao = require("../config/database");
const Eventos = require("./eventos.model")

const Estudantes = conexao.define(
    "estudantes",
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: sequelize.STRING,
            allowNull: false
        },
        token_acesso: {
            type: sequelize.STRING,
            allowNull: false
        },

    },
    {
        tableName: "estudantes",
        timestamps: true
    }
);

Estudantes.belongsTo(Eventos, {
    foreignKey: "id_evento",
    targetKey: "id",
    as: "participouEm"
})

module.exports = Estudantes;