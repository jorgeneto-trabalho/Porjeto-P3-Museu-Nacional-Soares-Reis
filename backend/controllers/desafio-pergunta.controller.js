
const { where, model } = require("../config/database");
const { Desafios, DesafioPerguntas, Perguntas } = require("../models");

const endpointsFunction = {};

/*Para obter as perguntas para um desafio */
endpointsFunction.getChallengeQuestions = async (req, res) => {
    const { id } = req.params;
    try {
        const dados = await DesafioPerguntas.findAll(
            {
                attributes: Perguntas
            },
            {
                include: [{
                    model: Perguntas, model: Desafios
                }],
            },
            {
                where: { [Desafios.id]: id }
            }
        );

        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Desafio não encontrado.",
                data: null,
            });
        }

        res.status(200).json({
            status: "success",
            message: "Perguntas do desafio encontradas com sucesso.",
            data: dados.subjects,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao tentar obter as perguntas.",
            data: null,
        });
    }
};

module.exports = endpointsFunction;