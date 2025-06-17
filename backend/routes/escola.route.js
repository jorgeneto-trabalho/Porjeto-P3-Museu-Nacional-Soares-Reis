
/*Cada ficheiro começa com as importações do express, do router, da middleware para autenticação de token quando necessária e do controller relevante.*/

const express = require("express");
const router = express.Router();

const middleware = require("../middleware");

const escolaController = require("../controllers/escola.controller");

/* Para criar rotas é necessário ir ver ao ficheiro da API para qual tag elas vão ser usadas e como elas estão lá estruturadas. 
Para as fazer é -> router.<o método>(<"/o endpoit/:<o parâmetro se necessário>">, middleware.checkToken(para utilizar a middleware de autenticação de token), <a const que importa o controller apropriado>.<o id de operação que está no ficheiro da api>)  */

router.post("/escola", middleware.checkToken, escolaController.createSchool);

router.get("/escola/:id", middleware.checkToken, escolaController.getSchoolByID);

router.put("/escola/:id", middleware.checkToken, escolaController.updateSchool);

router.delete("/escola/:id", middleware.checkToken, escolaController.deleteSchool);

router.get("/escola/:nome", middleware.checkToken, escolaController.getSchoolByName);

router.get("/escola/{id}/estudantes", middleware.checkToken, escolaController.getSchoolStudents);

/*Por último é necessário fazer a exportação do router*/

module.exports = router;