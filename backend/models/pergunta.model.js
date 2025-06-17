
/*O ficheiro models serve como modelo da base de dados. Primeiro temos de importar o sequelize, a conexao e qualquer outro model que vamos ter de utilizar para criar uma relação*/

const sequelize = require("sequelize");
const conexao = require("../config/database");
const Tentativas = require("./tentativa.model");
const PerguntaRespostas = require("./pergunta-resposta.model");
const Respostas = require("./resposta.model");
const DesafioPerguntas = require("./desafio-pergunta.model");
const Desafios = require("./desafio.model");


/*Primeiro criamos uma const <nome do model> = conexao.define(o resto vai ser escrito dentro destes parênteses) */
const Perguntas = conexao.define(
    "perguntas", /*<"Nome da tabela">, */
    {
        /*Aqui adicionamos os parâmetros da tabela. Não é necessário adicionar o createdAt e o updatedAt */
        id: {
            type: sequelize.INTEGER, /*Define o tipo, neste caso Integer */
            primaryKey: true, /*Define este parâmetro como sendo a chave primária*/
            autoIncrement: true /*Faz com que ele seja auto incrementado */
        },
        texto: {
            type: sequelize.STRING,
            allowNull: false /*Define se este parâmetro pode ser nulo*/
        },
        imagem: {
            type: sequelize.BLOB('long'),
            allowNull: true
        },
        pontos: {
            type: sequelize.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: "perguntas", /*O nome da tabela*/
        timestamps: true
    }
); /*Fim dos parênteses*/

/*Esta parte define as relações desta tabela, exitem "hasOne","belongsTo", "hasMany", "belongsToMany". Mais informação em sequelize.org V6, nas "Associations" e "Advaced associations concepts".
Como a tabela estudantes importa o id do evento, utilizamos um belongTo*/
Perguntas.hasOne(Tentativas);
Perguntas.belongsToMany(Respostas, {
    through: PerguntaRespostas
});
Perguntas.belongsToMany(Desafios, {
    through: DesafioPerguntas
});

/*Por último, só precisamos de fazer exportação do model*/
module.exports = Perguntas;