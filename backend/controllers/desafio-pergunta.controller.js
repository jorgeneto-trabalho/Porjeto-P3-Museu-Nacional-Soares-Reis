
const { where, model } = require("../config/database");
const { DesafioPerguntas, Perguntas } = require("../models");

const endpointsFunction = {};

/*Para obter as perguntas para um desafio */
endpointsFunction.getChallengeQuestions = async (req, res) => {
    const { id } = req.params;
    try {
        const dados = await DesafioPerguntas.findAll(
            {
                include: {
                    model: Perguntas,
                    as: "perguntas",
                    attribute: []
                }
            },
            { where: { id_desafio: id } },
        );
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Desafio-pergunta não encontrado.",
            });
        }
        res.status(200).json({
            status: "success",
            message: "Perguntas do desafio encontradas com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao tentar obter as perguntas.",
            data: null,
        });
        console.error(error);
    }
};

module.exports = endpointsFunction;