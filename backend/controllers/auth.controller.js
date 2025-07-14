//const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/config");

const endpointsFunction = {};

endpointsFunction.register = async (req, res) => {
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
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(403).json({
                success: false,
                message: "Email ou senha inválidos.",
            });
        }
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
        console.error(error);
    }
};
endpointsFunction.logout = async (req, res) => {
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
};

module.exports = endpointsFunction;