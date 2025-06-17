
/*O ficheiro models serve como modelo da base de dados. Primeiro temos de importar o sequelize, a conexao e qualquer outro model que vamos ter de utilizar para criar uma relação*/

const sequelize = require("sequelize");
const conexao = require("../config/database");
const Estudantes = require("./estudante.model");
const Perguntas = require("./pergunta.model");
const Respostas = require("./resposta.model")
const Eventos = require("./evento.model");


/*Primeiro criamos uma const <nome do model> = conexao.define(o resto vai ser escrito dentro destes parênteses) */
const Tentativas = conexao.define(
    "tentativas", /*<"Nome da tabela">, */
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
        correta: {
            type: sequelize.BOOLEAN,
            allowNull: false
        },
        atemptedAt: {
            type: sequelize.DATE,
            allowNull: false
        },
    },
    {
        tableName: "tentativas", /*O nome da tabela*/
    }
); /*Fim dos parênteses*/

/*Esta parte define as relações desta tabela, exitem "hasOne","belongsTo", "hasMany", "belongsToMany". Mais informação em sequelize.org V6, nas "Associations" e "Advaced associations concepts".
Como a tabela estudantes importa o id do evento, utilizamos um belongTo*/
Tentativas.belongsTo(Estudantes/*Nome da tabela*/, {
    foreignKey: "id_estudante",/*Nome da chave na tabela estudantes*/
    targetKey: "id",/*Nome da chave na tabela eventos*/
    as: "tentativaDoEstudante"/*Nome da realção*/
});
Tentativas.belongsTo(Perguntas, {
    foreignKey: "id_pergunta",
    targetKey: "id",
    as: "tentativaParaAPergunta"
});
Tentativas.belongsTo(Respostas, {
    foreignKey: "id_resposta",
    targetKey: "id",
    as: "respostaDadaFoi"
});
Tentativas.belongsTo(Eventos, {
    foreignKey: "id_evento",
    targetKey: "id",
    as: "tentativaParaOEvento"
});



/*Por último, só precisamos de fazer exportação do model*/
module.exports = Tentativas;