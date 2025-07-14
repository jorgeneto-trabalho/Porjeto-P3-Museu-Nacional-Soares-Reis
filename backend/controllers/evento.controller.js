
const { where, model } = require("../config/database");
const { Eventos, Desafios, Perguntas } = require("../models");

const endpointsFunction = {};

/*Cria um evento*/
endpointsFunction.createEvent = async (req, res) => {
    const { nome, codigo_qr, data_evento } = req.body;
    try {
        const dados = await Eventos.create({
            nome: nome,
            codigo_qr: codigo_qr,
            data_evento: data_evento
        });

        res.status(201).json({
            status: "success",
            message: "Evento criado com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao criar o evento.",
            data: null,
        });
        console.error(error);
    }
};

/*Remove um evento pelo id*/
endpointsFunction.deleteEvent = async (req, res) => {
    const id = req.params;
    try  {
        const dados = await Eventos.destroy({
            where: { id: id },
        });
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Evento não encontrado.",
                
            });
           
        }
        res.status(204).json({
            status: "success",
            message: "Evento apagada com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar o evento.",
            data: null,
        });
        console.error(error);
    }
};

/*Obtem os dados de um evento pelo id*/
endpointsFunction.getEventByID = async (req, res) => {
    const id = req.params;
    try {
        const dados = await Eventos.findOne({
            where: { id: id },
        });
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Evento não encontrado.",
            });
        }
        res.status(200).json({
            status: "success",
            message: "Evento encontrado com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar o evento.",
            data: null,
        });
        console.error(error);
    }

};


/*Faz update da informação de um evento*/
endpointsFunction.updateEvent = async (req, res) => {
    const { id } = req.params;
    const { nome, codigo_qr, data_evento } = req.body;

    try {
        const dados = await Eventos.update(
            {
                nome: nome,
                codigo_qr: codigo_qr,
                data_evento: data_evento
            },
            {
                where: { id: id },
            }
        );
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Evento não encontrado.",
            });
        }
        res.status(200).json({
            status: "success",
            message: "Evento atualizado com sucesso.",
            data: dados,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao atualizar o evento.",
            data: null,
        });
        console.error(error);
    }
};

/*Obtem o desafio associado ao evento*/
endpointsFunction.getChallengeOfEvent = async (req, res) => {
    const id = req.params;
    try {
        const dados = await Eventos.findOne(
            {
                attributes: [Desafios],
            },
            {
                where: { id: id }
            },
            {
                include: [{
                    model: Desafios,
                }],
            });
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Desafio não encontrado.",
                data: null,
            });
        }
        res.status(200).json({
            status: "success",
            message: "Desafio encontrado com sucesso.",
            data: dados.subjects,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar o desafio do evento.",
            data: null,
        });
        console.error(error);
    }
};

/*Obtem as perguntas associado ao desafio do evento*/
endpointsFunction.getQuestionsForEvent = async (req, res) => {
    const id = req.params;
    try {
        const dados = await Eventos.findAll(
            {
                attributes: [Perguntas],
            },
            {
                where: { id: id }
            },
            {
                include: [{
                    model: Desafios,
                    include: [
                        Perguntas
                    ]
                }],
            });
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Evento não encontrado.",
                data: null,
            });
        }
        res.status(200).json({
            status: "success",
            message: "Perguntas do evento encontradas com sucesso.",
            data: dados.subjects,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar as perguntas do evento.",
            data: null,
        });
        console.error(error);
    }
};

module.exports = endpointsFunction;