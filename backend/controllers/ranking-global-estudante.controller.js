
const { where, model } = require("../config/database");
const { RankingGlobalEstudantes } = require("../models");

const endpointsFunction = {};

/*Cria o ranking do aluno globalmente*/
endpointsFunction.createGlobalStudentRanking = async (req, res) => {
    const pontos = req.body
    try {
        const dados = await RankingGlobalEstudantes.create({
            pontos: pontos
        });
        res.status(201).json({
            status: "success",
            message: "Ranking criado com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(404).json({
            status: "error",
            message: "Ocorreu um erro ao criar o ranking.",
            data: null,
        });
    }
}

/*Remove um ranking de um aluno*/
endpointsFunction.deleteGlobalRankStudent = async (req, res) => {
    const id = req.params
    try {
        const dados = await RankingGlobalEstudantes.destroy({
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

/*Obtem o ranking global de todos os alunos*/
endpointsFunction.getGlobalStudentRanking = async (req, res) => {
    try {
        const dados = await RankingEventoEstudantes.findAll();
        res.status(200).json({
            status: "success",
            message: "Rankings globais encontrados com sucesso.",
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


/*Faz update da pontuação num ranking de um aluno*/
endpointsFunction.updateGlobalRankStudent = async (req, res) => {
    const { id } = req.params;
    const { pontos } = req.body;
    try {
        const dados = await RankingEventoEstudantes.update(
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