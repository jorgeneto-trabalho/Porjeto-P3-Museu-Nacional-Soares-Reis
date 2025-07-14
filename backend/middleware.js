const jwt = require("jsonwebtoken");
const config = require("./config/config.js");

const checkToken = (req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];

  if (token != undefined && token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, config.secret, (error, decoded) => {
      if (error) {
        console.error("JWT ERROR →", error.message);   
        return res.status(401).json({
          success: false,
          message: "Token inválido ou expirado."
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({
      success: false,
      message: "O token é inválido.",
    });
  }
};

module.exports = {
  checkToken: checkToken,
};