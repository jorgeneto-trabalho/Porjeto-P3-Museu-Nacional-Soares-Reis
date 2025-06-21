
const { where, model } = require("../config/database");
const { Perguntas } = require("../models");

const endpointsFunction = {};

/*Cria uma pergunta*/
endpointsFunction.createQuestion = async (req, res) => {
    const { texto, imagem, pontos } = req.body;
    try {
        const dados = await Perguntas.create({
            texto: texto,
            imagem: imagem,
            pontos: pontos
        });

        res.status(201).json({
            status: "success",
            message: "Pergunta criada com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(404).json({
            status: "error",
            message: "Ocorreu um erro ao criar a pergunta.",
            data: null,
        });
    }
};

/*Remove uma pergunta pelo id*/
endpointsFunction.deleteQuestion = async (req, res) => {
    const id = req.params
    try {
        const dados = await Perguntas.destroy({
            where: { id: id },
        });
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Pergunta não encontrada.",
            });
        }
        res.status(204).json({
            status: "success",
            message: "Pergunta apagada com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao remover a pergunta.",
            data: null,
        });
    }
};

/*Obtem os dados de uma pergunta pelo id*/
endpointsFunction.getQuestionByID = async (req, res) => {
    const id = req.params;
    try {
        const dados = await Perguntas.findOne({
            where: { id: id },
        });
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Pergunta não encontrada.",
            });
        }
        res.status(200).json({
            status: "success",
            message: "Pergunta encontrada com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar a pergunta.",
            data: null,
        });
    }
};


/*Faz update da informação de uma pergunta*/
endpointsFunction.updateQuestion = async (req, res) => {
    const { id } = req.params;
    const { texto, imagem, pontos } = req.body;

    try {
        const dados = await Perguntas.update(
            {
                texto: texto,
                imagem: imagem,
                pontos: pontos
            },
            {
                where: { id: id },
            }
        );
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Pergunta não encontrada.",
            });
        }
        res.status(200).json({
            status: "success",
            message: "Pergunta atualizada com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao atualizar a pergunta.",
            data: null,
        });
    }
};

module.exports = endpointsFunction;