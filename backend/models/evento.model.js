
/*O ficheiro models serve como modelo da base de dados. Primeiro temos de importar o sequelize, a conexao e qualquer outro model que vamos ter de utilizar para criar uma relação*/

const sequelize = require("sequelize");
const conexao = require("../config/database");
const bcrypt = require("bcrypt");

/*Primeiro criamos uma const <nome do model> = conexao.define(o resto vai ser escrito dentro destes parênteses) */
const Eventos = conexao.define(
    "eventos", /*<"Nome da tabela">, */
    {
        /*Aqui adicionamos os parâmetros da tabela. Não é necessário adicionar o createdAt e o updatedAt */
        id: {
            type: sequelize.INTEGER, /*Define o tipo, neste caso Integer */
            primaryKey: true, /*Define este parâmetro como sendo a chave primária*/
            autoIncrement: true /*Faz com que ele seja auto incrementado */
        },
        nome: {
            type: sequelize.STRING,
            allowNull: false /*Define se este parâmetro pode ser nulo*/
        },
        codigo_qr: {
            type: sequelize.STRING,
            allowNull: false
        },
        data_evento: {
            type: sequelize.DATE,
            allowNull: false
        },
    },
    {
        tableName: "eventos", /*O nome da tabela*/
        timestamps: true /*Adiciona os timestamps*/
    }
); /*Fim dos parênteses*/

Eventos.beforeCreate((eventos, options) => {
    /*const codigo_qr = eventos.data_evento * eventos.id;*/
    return bcrypt
        .hash(eventos.codigo_qr, 10)
        .then((hash) => {
            eventos.codigo_qr = hash;
        })
        .catch((error) => {
            throw new Error("Erro ao gerar o hash: " + error.message);
        });
});

Eventos.beforeUpdate((eventos, options) => {
    if (eventos.changed("codigo_qr")) {
        return bcrypt
            .hash(eventos.codigo_qr, 10)
            .then((hash) => {
                eventos.codigo_qr = hash;
            })
            .catch((error) => {
                throw new Error("Erro ao gerar o hash: " + error.message);
            });
    }
});

Eventos.prototype.validCodigoQr = async function (codigo_qr) {
    return await bcrypt.compare(codigo_qr, this.codigo_qr);
};

/*Por último, só precisamos de fazer exportação do model*/
module.exports = Eventos;