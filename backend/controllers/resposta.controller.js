
const { where, model } = require("../config/database");
const { Respostas } = require("../models");

const endpointsFunction = {};

/*Cria uma resposta para perguntas*/
endpointsFunction.createAnswer = async (req, res) => {
    const { texto, imagem } = req.body
    try {
        const dados = await Respostas.create({
            texto: texto,
            imagem: imagem
        });
        res.status(201).json({
            status: "success",
            message: "Resposta criada com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(404).json({
            status: "error",
            message: "Ocorreu um erro ao criar a resposta.",
            data: null,
        });
    }
}

/*Remove uma resposta*/
endpointsFunction.deleteAnswer = async (req, res) => {
    const id = req.params
    try {
        const dados = await Respostas.destroy({
            where: { id: id },
        });
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Resposta não encontrada.",
            });
        }
        res.status(204).json({
            status: "success",
            message: "Resposta apagada com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao remover a resposta.",
            data: null,
        });
    }
};

/*Obtem uma resposta*/
endpointsFunction.getAnswer = async (req, res) => {
    const id = req.body
    try {
        const dados = await Respostas.findOne(
            {
                where: { id: id }
            }
        );
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Resposta não encontrada.",
            });
        }
        res.status(200).json({
            status: "success",
            message: "Resposta encontrada com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar a resposta.",
            data: null,
        });
    }
};


/*Faz update da informação em uma resposta*/
endpointsFunction.updateAnswer = async (req, res) => {
    const { id } = req.params;
    const { texto, imagem } = req.body
    try {
        const dados = await Respostas.update(
            {
                texto: texto,
                imagem: imagem
            },
            {
                where: { id: id },
            }
        );
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Resposta não encontrada.",
            });
        }
        res.status(200).json({
            status: "success",
            message: "Resposta atualizada com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao atualizar a resposta.",
            data: null,
        });
    }
};

module.exports = endpointsFunction;