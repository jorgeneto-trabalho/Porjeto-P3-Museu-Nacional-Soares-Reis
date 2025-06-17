
/*O ficheiro models serve como modelo da base de dados. Primeiro temos de importar o sequelize, a conexao e qualquer outro model que vamos ter de utilizar para criar uma relação*/

const sequelize = require("sequelize");
const conexao = require("../config/database");
const Eventos = require("./evento.model");
const DesafioPerguntas = require("./desafio-pergunta.model");
const Perguntas = require("./pergunta.model");
/*Primeiro criamos uma const <nome do model> = conexao.define(o resto vai ser escrito dentro destes parênteses) */
const Desafios = conexao.define(
    "desafios", /*<"Nome da tabela">, */
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
        codigo: {
            type: sequelize.STRING,
            allowNull: false
        },
        descricao: {
            type: sequelize.STRING,
            allowNull: false
        }
    },
    {
        tableName: "desafios", /*O nome da tabela*/
        timestamps: true /*Adiciona os timestamps*/
    }
); /*Fim dos parênteses*/

/*Esta parte define as relações desta tabela, exitem "hasOne","belongsTo", "hasMany", "belongsToMany". Mais informação em sequelize.org V6, nas "Associations" e "Advaced associations concepts".
Como a tabela estudantes importa o id do evento, utilizamos um belongTo*/
Desafios.belongsToMany(Perguntas, {
    through: DesafioPerguntas
});
Desafios.hasMany(Eventos);

/*Por último, só precisamos de fazer exportação do model*/
module.exports = Desafios;