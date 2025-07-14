const sequelize = require("sequelize");

const DesafioPerguntas = require("./desafio-pergunta.model");
const Desafios = require("./desafio.model");
const Escolas = require("./escola.model");
const Estudantes = require("./estudante.model");
const Eventos = require("./evento.model");
const PerguntaRespostas = require("./pergunta-resposta.model");
const Perguntas = require("./pergunta.model");
const RankingEventoEstudantes = require("./ranking-evento-estudante.model");
const RankingGlobalEscolas = require("./ranking-global-escola.model");
const RankingGlobalEstudantes = require("./ranking-global-estudante.model");
const Respostas = require("./resposta.model");
const Tentativas = require("./tentativa.model");


/*Este ficheiro define as relações das tabelas, existem "hasOne","belongsTo", "hasMany", "belongsToMany". Mais informação em sequelize.org V6, nas "Associations" e "Advaced associations concepts".*/

DesafioPerguntas.belongsTo(Desafios, {
    foreignKey: "id_desafio",
    targetKey: "id",
    as: "desafioParaARelacaoMM"
});
DesafioPerguntas.belongsTo(Perguntas, {
    foreignKey: "id_pergunta",
    targetKey: "id",
    as: "perguntaParaARelacaoMM"
});

Desafios.belongsToMany(Perguntas, {
    through: DesafioPerguntas
});

Estudantes.belongsTo(Eventos/*Nome da tabela*/, {
    foreignKey: "id_evento",/*Nome da chave na tabela estudantes*/
    targetKey: "id",/*Nome da chave na tabela eventos*/
    as: "participouEm"/*Nome da realção*/
});

Eventos.belongsTo(Escolas/*Nome da tabela*/, {
    foreignKey: "id_escola",/*Nome da chave na tabela estudantes*/
    targetKey: "id",/*Nome da chave na tabela eventos*/
    as: "esolasQueParticiparam"/*Nome da realção*/
});
Eventos.belongsTo(Desafios, {
    foreignKey: "id_desafio",
    targetKey: "id",
    as: "desafiosDoEvento"
});

PerguntaRespostas.belongsTo(Perguntas, {
    foreignKey: "id_pergunta",
    targetKey: "id",
    as: "perguntaParaARelacaoMM"
});
PerguntaRespostas.belongsTo(Respostas, {
    foreignKey: "id_resposta",
    targetKey: "id",
    as: "respostaParaARelacaoMM"
});

Perguntas.belongsToMany(Respostas, {
    through: PerguntaRespostas
});
Perguntas.belongsToMany(Desafios, {
    through: DesafioPerguntas
});

RankingEventoEstudantes.belongsTo(Estudantes/*Nome da tabela*/, {
    foreignKey: "id_estudante",/*Nome da chave na tabela estudantes*/
    targetKey: "id",/*Nome da chave na tabela eventos*/
    as: "guardaAPontuacaoDo"/*Nome da realção*/
});
RankingEventoEstudantes.belongsTo(Eventos, {
    foreignKey:"id_evento",
    targetKey: "id",
    as: "scoreboardPara"
});

RankingGlobalEscolas.belongsTo(Escolas/*Nome da tabela*/, {
    foreignKey: "id_escola",/*Nome da chave na tabela estudantes*/
    targetKey: "id",/*Nome da chave na tabela eventos*/
    as: "guardaAPontuacaoDa"/*Nome da realção*/
});

RankingGlobalEstudantes.belongsTo(Estudantes/*Nome da tabela*/, {
    foreignKey: "id_estudante",/*Nome da chave na tabela estudantes*/
    targetKey: "id",/*Nome da chave na tabela eventos*/
    as: "guardaAPontuacaoDo"/*Nome da realção*/
});

Respostas.belongsToMany(Perguntas, {
    through: PerguntaRespostas
});

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

module.exports = {
    DesafioPerguntas,
    Desafios,
    Escolas,
    Estudantes,
    Eventos,
    PerguntaRespostas,
    Perguntas,
    RankingEventoEstudantes,
    RankingGlobalEscolas,
    RankingGlobalEstudantes,
    Respostas,
    Tentativas
}
