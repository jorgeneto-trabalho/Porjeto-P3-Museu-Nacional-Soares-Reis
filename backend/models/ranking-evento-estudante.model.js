
/*O ficheiro models serve como modelo da base de dados. Primeiro temos de importar o sequelize, a conexao e qualquer outro model que vamos ter de utilizar para criar uma relação*/

const sequelize = require("sequelize");
const conexao = require("../config/database");
const Estudantes = require("./estudante.model");
const Eventos = require("./evento.model");

/*Primeiro criamos uma const <nome do model> = conexao.define(o resto vai ser escrito dentro destes parênteses) */
const RankingEventoEstudantes = conexao.define(
    "ranking_evento_estudantes", /*<"Nome da tabela">, */
    {
        /*Aqui adicionamos os parâmetros da tabela. Não é necessário adicionar o createdAt e o updatedAt */
        id: {
            type: sequelize.INTEGER, /*Define o tipo, neste caso Integer */
            primaryKey: true, /*Define este parâmetro como sendo a chave primária*/
            autoIncrement: true /*Faz com que ele seja auto incrementado */
        },
        pontos: {
            type: sequelize.INTEGER,
            allowNull: false /*Define se este parâmetro pode ser nulo*/
        },
    },
    {
        tableName: "ranking_evento_estudantes", /*O nome da tabela*/
        timestamps: true /*Adiciona os timestamps*/
    }
); /*Fim dos parênteses*/

/*Esta parte define as relações desta tabela, exitem "hasOne","belongsTo", "hasMany", "belongsToMany". Mais informação em sequelize.org V6, nas "Associations" e "Advaced associations concepts".
Como a tabela estudantes importa o id do evento, utilizamos um belongTo*/
RankingEventoEstudantes.belongsTo(Estudantes/*Nome da tabela*/, {
    foreignKey: "id_estudante",/*Nome da chave na tabela estudantes*/
    targetKey: "id",/*Nome da chave na tabela eventos*/
    as: "guardaAPontuacaoDo"/*Nome da realção*/
});
RankingEventoEstudantes.belongsTo(Eventos, {
    foreignKey:"id_evento",
    targetKey: "id",
    as: "scoreboardPara"
})

/*Por último, só precisamos de fazer exportação do model*/
module.exports = RankingEventoEstudantes;