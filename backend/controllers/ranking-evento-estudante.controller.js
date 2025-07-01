
const { where, model } = require("../config/database");
const { RankingEventoEstudantes, Eventos } = require("../models");

const endpointsFunction = {};

/*Cria o ranking do aluno num evento*/
endpointsFunction.createEventRanking = async (req, res) => {
    const { pontos } = req.body;
    try {
        const dados = await RankingEventoEstudantes.create({
            pontos: pontos
        });

        res.status(201).json({
            status: "success",
            message: "Ranking do aluno no evento criada com sucesso.",
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

/*Remove um ranking para o evento pelo seu id*/
endpointsFunction.deleteEventRanking = async (req, res) => {
    const id = req.params
    try {
        const dados = await RankingEventoEstudantes.destroy({
            where: { id: id },
        });
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Ranking para evento não encontrada.",
            });
        }
        res.status(204).json({
            status: "success",
            message: "Ranking para evento apagado com sucesso.",
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

/*Obtem o ranking de todos os alunos que participaram no evento*/
endpointsFunction.getEventRanking = async (req, res) => {
    const id = req.params;
    try {
        const dados = await RankingEventoEstudantes.findAll(
            {
                include: [{ model: Eventos }]
            },
            {
                where: { [Eventos.id]: id },
            });
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Evento não encontrada.",
            });
        }
        res.status(200).json({
            status: "success",
            message: "Rankings para o evento encontrados com sucesso.",
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


/*Faz update da pontuação num ranking para evento*/
endpointsFunction.updateEventRanking = async (req, res) => {
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