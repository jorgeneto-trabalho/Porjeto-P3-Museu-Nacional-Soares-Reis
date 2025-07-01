
const { where, model } = require("../config/database");
const { PerguntaRespostas, Respostas, Perguntas } = require("../models");

const endpointsFunction = {};



/*Obtem as possíveis respostas para a pergunta*/
endpointsFunction.getQuestionAnswers = async (req, res) => {
    const id = req.params;
    try {
        const dados = await PerguntaRespostas.findAll(
            {
                attributes: [Respostas]
            },
            {
                include: [{
                    model: Perguntas,
                    model: Respostas
                }]
            },
            {
                where: { [Perguntas.id]: id },
            });
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Pergunta não encontrada.",
            });
        }
        res.status(200).json({
            status: "success",
            message: "Respostas encontradas com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar as respostas.",
            data: null,
        });
    }
};

module.exports = endpointsFunction;