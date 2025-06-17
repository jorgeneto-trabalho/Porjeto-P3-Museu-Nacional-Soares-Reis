
/*O ficheiro models serve como modelo da base de dados. Primeiro temos de importar o sequelize, a conexao e qualquer outro model que vamos ter de utilizar para criar uma relação*/

const sequelize = require("sequelize");
const conexao = require("../config/database");
const Desafios = require("./desafio.model");
const Perguntas = require("./pergunta.model")

/*Primeiro criamos uma const <nome do model> = conexao.define(o resto vai ser escrito dentro destes parênteses) */
const DesafioPerguntas = conexao.define(
    "desafio-perguntas", /*<"Nome da tabela">, */
    {
        /*Aqui adicionamos os parâmetros da tabela. Não é necessário adicionar o createdAt e o updatedAt */
        id: {
            type: sequelize.INTEGER, /*Define o tipo, neste caso Integer */
            primaryKey: true, /*Define este parâmetro como sendo a chave primária*/
            autoIncrement: true /*Faz com que ele seja auto incrementado */
        }
    },
    {
        tableName: "desafio-perguntas", /*O nome da tabela*/
        timestamps: true
    }
); /*Fim dos parênteses*/

/*Esta parte define as relações desta tabela, exitem "hasOne","belongsTo", "hasMany", "belongsToMany". Mais informação em sequelize.org V6, nas "Associations" e "Advaced associations concepts".
Como a tabela estudantes importa o id do evento, utilizamos um belongTo*/
DesafioPerguntas.belongsTo(Desafios, {
    foreignKey: "id_desafio",
    targetKey: "id",
    as: "desafioParaARelacaoMM"
});
DesafioPerguntas.belongsTo(Perguntas, {
    foreignKey: "id_pergunta",
    targetKey: "id",
    as: "perguntaParaARelacaoMM"
})

/*Por último, só precisamos de fazer exportação do model*/
module.exports = DesafioPerguntas;