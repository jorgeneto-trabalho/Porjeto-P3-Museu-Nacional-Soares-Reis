/*Primeiro, a importação de todos os models necessários*/
const { where, model } = require("../config/database");
const { Estudantes, Escolas, Eventos, RankingEventoEstudantes, RankingGlobalEstudantes } = require("../models");
/*Também temos de adicionar uma const para endpointsFunction*/
const endpointsFunction = {};

/*Começamos com endpointFunction.<id de operações> = async (req, res) => {tudo é escrito dentre destes parênteses} */
endpointsFunction.createStudent = async (req, res) => {
    const { nome } = req.body; /*Esta função é para criar um estudante, então temos de ir buscar a informação escrita pelo utilizador utilizando const <nome_variável ou {nome_variáveis, se houverem multiplas} = req.body> */
    try { /*Utilizamos o try {} e o .create do sequelize*/
        const dados = await Estudantes.create(
            {
                nome: nome,
            });
        /*Antes de fecharmos o try{}, adicionamos o res.status(201) para afirmar que o método foi um sucesso*/
        res.status(201).json({
            status: "success",
            message: "Estudante criado com sucesso.",
            data: dados,
        });
    } catch (error) /*Por último, utilizamos os catch para os erros*/ {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao criar estudante.",
            data: null,
        });
    }
};

/*Este método usa o findOne para encontrar a informação do estudante utilizando o id*/
endpointsFunction.getStudentById = async (req, res) => {
    try {
        const dados = await Estudantes.findOne(
            {
                where: { id: id },
            }
        );
        if (!dados) { /*Este 'if' verifica se a tabela foi encontrada e retorna um erro se não*/
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

/*Este método utiliza o .update para fazer update de uma tabela e funciona quase como o create e o findOne*/
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

/*Método para remover um estudante com o .destroy*/
endpointsFunction.deleteStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const dados = await Estudantes.destroy({
            where: { id: id },
        });
        if (!dados) {
            return res.status(404).json({
                status: "error",
                message: "Estudante não encontrado.",
            });
        }
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
/*O método que encontra a informação de um estudante pelo nome com o .findOne */
endpointsFunction.getStudentByName = async (req, res) => {
    const { nome } = req.params;
    try {
        const dados = await Estudantes.findOne({
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

/*Este método utiliza o findOne para encontrar a escola a que o utilizador pertence*/
endpointsFunction.getStudentSchool = async (req, res) => {
    const { id } = req.params;
    try {
        const dados = await Estudantes.findOne(
            {
                attributes: [Escolas.nome],
            },
            { /*<attribute: [<atributo]> serve para apenas receber o nome da escola*/
                where: { id: id },
            },
            {
                include: [{ /*O estudante não tem o nome da escola na tabela dele e não tem uma relação com a tabela escolas, então temos de primeiro utilizar "include" para incluir a tabela eventos que tem relação com a tabela escolas */
                    model: Eventos, /*o nome da tabela no model*/
                    include: [
                        Escolas /*E depois temos de fazer o include do tabela escolas*/
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
            message: "Escola do aluno encontrada com sucesso.",
            data: dados.subjects,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar a escola do aluno.",
            data: null,
        });
    }
};

/*Obtem o ranking do estudante no evento*/
endpointsFunction.getStudentEventRanking = async (req, res) => {
    const { id } = req.params;
    try {
        const dados = await Estudantes.findOne(
            {
                attributes: [RankingEventoEstudantes],
            },

            {
                where: { id: id },
            },

            {
                include: [{
                    model: RankingEventoEstudantes,
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
            message: "Ranking do estudante no evento encontrado com sucesso.",
            data: dados.subjects,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar o ranking do aluno no evento.",
            data: null,
        });
    }
};

/*Obtem o ranking do estudante globalmente*/
endpointsFunction.getStudentGlobalRanking = async (req, res) => {
    const { id } = req.params;
    try {
        const dados = await Estudantes.findOne(
            {
                attributes: [RankingGlobalEstudantes],
            },
            {
                where: { id: id },
            },
            {
                include: [{
                    model: RankingGlobalEstudantes,
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
            message: "Ranking do aluno globalmente encontrado com sucesso.",
            data: dados.subjects,
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro ao listar o ranking global do aluno.",
            data: null,
        });
    }
};

/*Por último, fazer exportação do endpointsFunction */
module.exports = endpointsFunction;