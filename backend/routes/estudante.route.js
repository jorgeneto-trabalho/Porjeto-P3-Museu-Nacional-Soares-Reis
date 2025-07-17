
/*Cada ficheiro começa com as importações do express, do router, da middleware para autenticação de token quando necessária e do controller relevante.*/

const express = require("express");
const router = express.Router();

const middleware = require("../middleware");

const estudanteController = require("../controllers/estudante.controller");

/* Para criar rotas é necessário ir ver ao ficheiro da API para qual tag elas vão ser usadas e como elas estão lá estruturadas. 
Para as fazer é -> router.<o método>(<"/o endpoit/:<o parâmetro se necessário>">, middleware.checkToken(para utilizar a middleware de autenticação de token), <a const que importa o controller apropriado>.<o id de operação que está no ficheiro da api>)  */

router.post("/estudante", estudanteController.createStudent);

router.get("/estudante/:id", middleware.checkToken, estudanteController.getStudentById);

router.put("/estudante/:id", middleware.checkToken, estudanteController.updateStudent);

router.delete("/estudante/:id", middleware.checkToken, estudanteController.deleteStudent);

router.get("/estudante/:nome", middleware.checkToken, estudanteController.getStudentByName);

router.get("/estudante/:id/escola", middleware.checkToken, estudanteController.getStudentSchool);

router.get("/estudante/:id/ranking-evento", middleware.checkToken, estudanteController.getStudentEventRanking);

router.get("/estudante/:id/ranking-global", middleware.checkToken, estudanteController.getStudentGlobalRanking);

/*Por último é necessário fazer a exportação do router*/
module.exports = router;