
const { where, model } = require("../config/database");
const { Escolas, Estudantes } = require("../models");

const endpointsFunction = {};

/*Cria a escola*/
endpointsFunction.createSchool = async (req, res) => {
    const { nome } = req.body;
    try {
        const dados = await Escolas.create({
            nome: nome
        });

        res.status(201).json({
            status: "success",
            message: "Escola criada com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(404).json({
            status: "error",
            message: "Ocorreu um erro ao criar a escola.",
            data: null,
        });
    }
};

/*Encontra a escola pelo id*/
endpointsFunction.getSchoolByID = async (req, res) => {
    const id = req.params
    try {
        const dados = await Escolas.findOne({
            where: { id: id },
        });
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Escola não encontrada.",
            });
        }
        res.status(200).json({
            status: "success",
            message: "Escola encontrada com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar a escola.",
            data: null,
        });
    }
};

/*Faz update da informação de uma escola*/
endpointsFunction.updateSchool = async (req, res) => {
    const { id } = req.params;
    const { nome } = req.body;

    try {
        const dados = await Escolas.update(
            {
                nome: nome
            },
            {
                where: { id: id },
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
            message: "Escola atualizada com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao atualizar escola.",
            data: null,
        });
    }
};

/*Apaga uma escola*/
endpointsFunction.deleteSchool = async (req, res) => {
    const { id } = req.params;
    try {
        const dados = await Escolas.destroy({
            where: { id: id },
        });
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Escola não encontrada.",
            });
        }
        res.status(204).json({
            status: "success",
            message: "Escola apagada com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao apagar a escola.",
            data: null,
        });
    }
};

/*Obtem os dados de uma escola pelo nome*/
endpointsFunction.getSchoolByName = async (req, res) => {
    const nome = req.params;
    try {
        const dados = await Escolas.findOne({
            where: { nome: nome },
        });
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Escola não encontrada.",
            });
        }
        res.status(200).json({
            status: "success",
            message: "Escola encontrada com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar a escola.",
            data: null,
        });
    }
};

/*Obtem o nome dos estudantes da escola*/
endpointsFunction.getSchoolStudents = async (req, res) => {
    const id = req.params;
    try {
        const dados = await Escolas.findAll(
            {
                attributes: [Estudantes.nome],
            },
            {
                where: { id: id }
            },
            {
                include: [{
                    model: Estudantes,
                }],
            });
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Escola não encontrada.",
                data: null,
            });
        }
        res.status(200).json({
            status: "success",
            message: "Estudantes encontrados com sucesso.",
            data: dados.subjects,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar os nomes dos estudantes.",
            data: null,
        });
    }
};

module.exports = endpointsFunction;