const Estudantes = require("../models/estudante.model");
const Eventos = require("../models/evento.model");
const Escolas = require("../models/escola.model");
const RankingEventoEstudantes = require("../models/ranking_evento_estudante")
const RankingGlobalEstudantes = require("../models/ranking_global_estudante")
const { model } = require("../config/database");

const endpointsFunction = {};


endpointsFunction.createStudent = async (req, res) => {
    const { nome, token_acesso } = req.body;
    try {
        const dados = await Estudantes.create({
            nome: nome,
            token_acesso: token_acesso,
        });

        res.status(201).json({
            status: "success",
            message: "Estudante criado com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(404).json({
            status: "error",
            message: "Ocorreu um erro ao criar estudante.",
            data: null,
        });
    }
};

endpointsFunction.getStudentById = async (req, res) => {
    try {
        const dados = await Estudantes.findOne({
            where: { id: id },
        });
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Estudante não encontrado.",
            });
        }
        res.status(200).json({
            status: "success",
            message: "Estudante encontrado com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar o estudante.",
            data: null,
        });
    }
};

endpointsFunction.updateStudent = async (req, res) => {
    const { id } = req.params;
    const { nome, token_acesso } = req.body;

    try {
        const dados = await Estudantes.update(
            {
                nome: nome,
                token_acesso: token_acesso,
            },
            {
                where: { id: id },
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
            message: "Estudante atualizado com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao atualizar estudante.",
            data: null,
        });
    }
};

endpointsFunction.deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const dados = await Estudantes.destroy({
            where: { id: id },
        });

        res.status(204).json({
            status: "success",
            message: "Estudante apagado com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao apagar estudante.",
            data: null,
        });
    }
};

endpointsFunction.getStudentByName = async (req, res) => {
    const { nome } = req.params;
    try {
        const dados = await Aluno.findOne({
            where: { nome: nome },
        });
        if (!dados) {
          return res.status(404).json({
            status: "error",
            message: "Estudante não encontrado.",
          });
        }

        res.status(200).json({
            status: "success",
            message: "Estudante encontrado com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar estudante.",
            data: null,
        });
    }
};

endpointsFunction.getStudentSchool = async (req, res) => {
    const { id } = req.params;
    try {
        const dados = await Estudantes.findOne({
            attributes: ["escolas".nome],
            where: { id: id },
            include: [{
                model: "eventos",
                include: [
                    "escolas"
                ]
            }],
        });

        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Estudante não encontrado.",
                data: null,
            });
        }

        res.status(200).json({
            status: "success",
            message: "Disciplinas encontradas com sucesso.",
            data: dados.subjects,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar disciplinas.",
            data: null,
        });
    }
};

endpointsFunction.getStudentEventRanking = async (req, res) => {
    const { id } = req.params;
    try {
        const dados = await Estudantes.findOne({
            where: { id: id },
            include: [{
                model: "ranking_evento_estudantes",                   
            }],
        });

        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Estudante não encontrado.",
                data: null,
            });
        }

        res.status(200).json({
            status: "success",
            message: "Disciplinas encontradas com sucesso.",
            data: dados.subjects,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar disciplinas.",
            data: null,
        });
    }
};

endpointsFunction.getStudentGlobalRanking = async (req, res) => {
    const { id } = req.params;
    try {
        const dados = await Estudantes.findOne({
            where: { id: id },
            include: [{
                model: "ranking_global_estudantes",                   
            }],
        });

        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Estudante não encontrado.",
                data: null,
            });
        }

        res.status(200).json({
            status: "success",
            message: "Disciplinas encontradas com sucesso.",
            data: dados.subjects,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar disciplinas.",
            data: null,
        });
    }
};

module.exports = endpointsFunction;