
/*Cada ficheiro começa com as importações do express, do router, da middleware para autenticação de token quando necessária e do controller relevante.*/

const express = require("express");
const router = express.Router();

const middleware = require("../middleware");

const rankingGlobalEstudantesController = require("../controllers/ranking-global-estudantes.controller");

/* Para criar rotas é necessário ir ver ao ficheiro da API para qual tag elas vão ser usadas e como elas estão lá estruturadas. 
Para as fazer é -> router.<o método>(<"/o endpoit/:<o parâmetro se necessário>">, middleware.checkToken(para utilizar a middleware de autenticação de token), <a const que importa o controller apropriado>.<o id de operação que está no ficheiro da api>)  */

router.get("/estudante/ranking-global", middleware.checkToken, rankingGlobalEstudantesController.getGlobalStudentRanking);

router.delete("/estudante/:id/ranking-global", middleware.checkToken, rankingGlobalEstudantesController.deleteGlobalRankStudent);

router.put("/estudante/:id/ranking-global", middleware.checkToken, rankingGlobalEstudantesController.updateGlobalRankStudent);

module.exports = router;