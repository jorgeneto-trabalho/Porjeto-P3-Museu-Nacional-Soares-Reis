const { where, model } = require("../config/database");
const { Desafios } = require("../models");
const endpointsFunction = {};

/* Cria um desafio*/
endpointsFunction.createChallenge = async (req, res) => {
    const { nome, codigo, descricao } = req.body;
    try {
        const dados = await Desafios.create({
            nome: nome,
            codigo: codigo,
            descricao: descricao
        });

        res.status(201).json({
            status: "success",
            message: "Desafio criado com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(404).json({
            status: "error",
            message: "Ocorreu um erro ao criar o desafio.",
            data: null,
        });
        console.error(error);
    }
};

/*Obter um desafio pelo seu id */
endpointsFunction.getChallengeByID = async (req, res) => {
    const { id } = req.params;
    try {
        const dados = await Desafios.findByPk(id,
            {
                attributes: ["id", "nome", "descricao"],
            });
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Desafio não encontrado.",
            });
        }
        res.status(200).json({
            status: "success",
            message: "Desafio encontrado com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar o desafio.",
            data: null,
        });
        console.error(error);
    }
};

/*Faz update da informação do desafio*/
endpointsFunction.updateChallenge = async (req, res) => {
    const { id } = req.params;
    const { nome, codigo, descricao } = req.body;

    try {
        const dados = await Desafios.update(
            {
                nome: nome,
                codigo: codigo,
                descricao: descricao
            },
            {
                where: { id: id },
            }
        );
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Desafio não encontrado.",
            });
        }
        res.status(200).json({
            status: "success",
            message: "Desafio atualizado com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao atualizar desafio.",
            data: null,
        });
        console.error(error);
    }
};

/*Apaga a informação de um desafio*/
endpointsFunction.deleteChallenge = async (req, res) => {
    const { id } = req.params;
    try {
        const dados = await Desafios.destroy({
            where: { id: id },
        });

        res.status(204).json({
            status: "success",
            message: "Desafio apagado com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao apagar o desafio.",
            data: null,
        });
        console.error(error);
    }
};

module.exports = endpointsFunction;