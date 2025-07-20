const User = require("../models/");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/config");
const sequelize = require("../config/database");
const { Eventos } = require("../models");

const endpointsFunction = {};

/*endpointsFunction.register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const dados = await User.create({ email, password });

    res.status(200).json({
      success: true,
      message: "Utilizador criado com sucesso.",
      data: dados,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro durante o processo de autenticação.",
    });
  }
};

endpointsFunction.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(403).json({
        success: false,
        message: "Email ou senha inválidos.",
      });
    }

    // Compara a senha fornecida com o hash armazenado
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(403).json({
        success: false,
        message: "Email ou senha inválidos.",
      });
    }

    // Gera o token JWT
    const token = jwt.sign({ email: user.email }, config.secret, {
      expiresIn: config.timer,
    });

    res.status(200).json({
      success: true,
      message: "Autenticação realizada com sucesso.",
      AccessToken: token,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro durante o processo de autenticação.",
    });
  }
};
endpointsFunction.refreshToken = async (req, res) => {
  const { token } = req.body;

  try {
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token não fornecido.",
      });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          success: false,
          message: "Token inválido ou expirado.",
        });
      }

      const newToken = jwt.sign({ email: decoded.email }, config.secret, {
        expiresIn: config.timer,
      });

      res.status(200).json({
        success: true,
        message: "Token renovado com sucesso.",
        AccessToken: newToken,
      });
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro durante o processo de renovação do token.",
    });
  }
};

endpointsFunction.logout = async (req, res) => {
<<<<<<< HEAD
  try {
    // Invalida o token no lado do cliente (não há como invalidar um JWT no lado do servidor)
    res.status(200).json({
      success: true,
      message: "Logout realizado com sucesso.",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Ocorreu um erro durante o processo de logout.",
    });
  }
};
=======
    try {
        res.status(200).json({
            success: true,
            message: "Logout realizado com sucesso.",
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro durante o processo de logout.",
        });
        console.error(error);
    }
};*/
>>>>>>> branch-j-2


/*Para obter as informações do evento pelo códgio_qr*/
endpointsFunction.enterQrCode = async (req, res) => {
    const { codigo_qr } = req.body; /*O código que o utilizador inseriu na aplicação*/
    try {
        const eventos = await Eventos.findAll( /*eventos é uma variável que vai guardar a informação de todos os eventos */
            {
                attribute: []
            }
        );
        if (!eventos || eventos.length === 0) {
            return res.status(403).json({
                success: false,
                message: "Código inválido.",
            });
        }

        /* Utilizamos um for loop que vai utilizar a informação dos eventos e comparar todos os codigo_qr até obter um que seja igual ao que o utilizador inseriu. Depois, a informação do evento correto é guardado dentro da variável eventoCorreto*/
        let eventoCorreto = null;

        for (const evento of eventos) {
            const isMatch = await bcrypt.compare(codigo_qr, evento.codigo_qr);
            if (isMatch) {
                eventoCorreto = evento;
                break;
            }
        }

        if (!eventoCorreto) {
            return res.status(403).json({
                success: false,
                message: "Código inválido.",
            });
        }

        /*O token é criado utilizando o id do evento*/
        const token = jwt.sign({ id_evento: eventoCorreto.id }, config.secret, {
            expiresIn: config.timer,
        });

        /*Esta parte serve para que quando as informações do evento forem enviadas o código_qr não seja enviado também >>>> */
        const { codigo_qr:_, ...eventoInformacao} = eventoCorreto.get({ plain: true });

        res.status(200).json({
            success: true,
            message: "Autenticação realizada com sucesso.",
            AccessToken: token,
            evento: eventoInformacao, /*<<<< Aqui */
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: "Ocorreu um erro durante o processo de autenticação.",
        });
        console.error(error);
    }
};
module.exports = endpointsFunction;