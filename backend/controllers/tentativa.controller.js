
const sequelize = require("sequelize");
const { where, model } = require("../config/database");
const { Tentativas, Estudantes, Perguntas, Escolas, Eventos } = require("../models");

const endpointsFunction = {};

/*Cria uma resposta para perguntas*/
endpointsFunction.createAttempt = async (req, res) => {
    const { correta, atemptedAt } = req.body
    try {
        const dados = await Tentativas.create({
            correta: correta,
            atemptedAt: atemptedAt
        });
        res.status(201).json({
            status: "success",
            message: "Tentativa criada com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(404).json({
            status: "error",
            message: "Ocorreu um erro ao criar a tentativa.",
            data: null,
        });
    }
}

/*Remove uma tentativa*/
endpointsFunction.deleteAttempt = async (req, res) => {
    const id = req.params
    try {
        const dados = await Tentativas.destroy({
            where: { id: id },
        });
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Tentativa não encontrada.",
            });
        }
        res.status(204).json({
            status: "success",
            message: "Tentativa apagada com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao remover a tentativa.",
            data: null,
        });
    }
};

/*Obtem a tentativa de um estudante*/
endpointsFunction.getStudantAttempts = async (req, res) => {
    const id = req.body
    try {
        const dados = await Tentativas.findAll(
            {
                include: { model: Estudantes }
            },
            {
                where: { [Estudantes.id]: id }
            }
        );
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Estudante não encontrado.",
            });
        }
        res.status(200).json({
            status: "success",
            message: "Tentativas encontradas com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar as tentativas do estudante.",
            data: null,
        });
    }
};

/*Faz a soma dos pontos das resposta que o estudante respondeu corretamente*/
endpointsFunction.getStudantEventPoints = async (req, res) => {
    const id = req.body
    try {
        const dados = await Tentativas.findAll(

            {
                include: { model: Perguntas, model: Estudantes }
            },
            {
                where: { [Estudantes.id]: id, correta: 1 }
            },
            {
                attributes: [sequelize.fn("SUM", sequelize.col(Perguntas.pontos))]
            }
        );
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Estudante não encontrado.",
            });
        }
        res.status(200).json({
            status: "success",
            message: "Pontuação total calculada com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao calcuclar a pontuação.",
            data: null,
        });
    }
};

/*Faz a soma dos pontos de todos os alunos de uma escola*/
endpointsFunction.getSchoolTotalPoints = async (req, res) => {
    const id = req.body
    try {
        const dados = await Tentativas.findAll(

            {
                include: [{ model: Escolas, model: Perguntas, model: Estudantes, model: Eventos}]
            },
            {
                where: { [Escolas.id]: id, correta: 1 }
            },
            {
                attributes: [sequelize.fn("SUM", sequelize.col("perguntas.pontos"))]
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
            message: "Pontuação total calculada com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao calcuclar a pontuação.",
            data: null,
        });
    }
};


/*Faz update da informação em uma tentativa*/
endpointsFunction.updateAttempt = async (req, res) => {
    const { id } = req.params;
    const { correta, atemptedAt } = req.body
    try {
        const dados = await Respostas.update(
            {
                correta: correta,
                atemptedAt: atemptedAt
            },
            {
                where: { id: id },
            }
        );
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Tentativa não encontrada.",
            });
        }
        res.status(200).json({
            status: "success",
            message: "Tentativa atualizada com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao atualizar a tentativa.",
            data: null,
        });
    }
};

module.exports = endpointsFunction;