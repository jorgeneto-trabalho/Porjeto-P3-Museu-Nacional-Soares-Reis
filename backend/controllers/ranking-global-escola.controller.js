
const { where, model } = require("../config/database");
const { RankingGlobalEscolas, Escolas } = require("../models");

const endpointsFunction = {};

/*Cria o ranking da escola*/
endpointsFunction.createSchoolRanking = async (req, res) => {
    const pontos = req.body
    try {
        const dados = await RankingGlobalEscolas.create({
            pontos: pontos
        });
        res.status(201).json({
            status: "success",
            message: "Ranking da escola criado com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(404).json({
            status: "error",
            message: "Ocorreu um erro ao criar o ranking.",
            data: null,
        });
    }
};

/*Remove um ranking de uma escola*/
endpointsFunction.deleteSchoolRanking = async (req, res) => {
    const id = req.params
    try {
        const dados = await RankingGlobalEscolas.destroy({
            where: { id: id },
        });
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Ranking não encontrada.",
            });
        }
        res.status(204).json({
            status: "success",
            message: "Ranking apagado com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao remover o ranking.",
            data: null,
        });
    }
};

/*Obtem o ranking de todas as escolas*/
endpointsFunction.getAllSchoolRanking = async (req, res) => {
    try {
        const dados = await RankingGlobalEscolas.findAll();
        res.status(200).json({
            status: "success",
            message: "Rankings das escolas encontrados com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar os rankings.",
            data: null,
        });
    }
};

endpointsFunction.getSchoolRanking = async (req, res) => {
    const id = req.body
    try {
        const dados = await RankingGlobalEscolas.findOne(
            {
                include: [{ model: Escolas }]
            },
            {
                where: { [Escolas.id]: id }
            }
        );
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Escola não encontrada.",
            });
        }
        res.status(200).json({
            status: "success",
            message: "Rankings da escola encontrado com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar o ranking.",
            data: null,
        });
    }
};

/*Faz update da pontuação de uma escola*/
endpointsFunction.updateSchoolRanking = async (req, res) => {
    const { id } = req.params;
    const { pontos } = req.body;
    try {
        const dados = await RankingGlobalEscolas.update(
            {
                pontos: pontos
            },
            {
                where: { id: id },
            }
        );
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Ranking não encontrado.",
            });
        }
        res.status(200).json({
            status: "success",
            message: "Ranking atualizado com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao atualizar o ranking para evento.",
            data: null,
        });
    }
};

module.exports = endpointsFunction;