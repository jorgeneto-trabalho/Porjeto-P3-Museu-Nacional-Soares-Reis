
/*Cada ficheiro começa com as importações do express, do router, da middleware para autenticação de token quando necessária e do controller relevante.*/

const express = require("express");
const router = express.Router();

const middleware = require("../middleware");

const tentativaController = require("../controllers/tentativa.controller");

/* Para criar rotas é necessário ir ver ao ficheiro da API para qual tag elas vão ser usadas e como elas estão lá estruturadas. 
Para as fazer é -> router.<o método>(<"/o endpoit/:<o parâmetro se necessário>">, middleware.checkToken(para utilizar a middleware de autenticação de token), <a const que importa o controller apropriado>.<o id de operação que está no ficheiro da api>)  */

router.post("/estudante/:id/tentativa", middleware.checkToken, tentativaController.createAttempt);

router.delete("/estudante/:id/tentativa", middleware.checkToken, tentativaController.deleteAttempt);

router.get("/estudante/:id/tentativa", middleware.checkToken, tentativaController.getStudantAttempts);

router.get("/estudante/:id/evento/pontuação", middleware.checkToken, tentativaController.getStudantEventPoints);

router.get("/escola/:id/global/pontuação", middleware.checkToken, tentativaController.getSchoolTotalPoints);

router.put("/estudante/:id/tentativas/:id_tentativa", middleware.checkToken, tentativaController.updateAttempt);

module.exports = router;