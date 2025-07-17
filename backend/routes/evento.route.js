
/*Cada ficheiro começa com as importações do express, do router, da middleware para autenticação de token quando necessária e do controller relevante.*/

const express = require("express");
const router = express.Router();

const middleware = require("../middleware");

const eventoController = require("../controllers/evento.controller");

/* Para criar rotas é necessário ir ver ao ficheiro da API para qual tag elas vão ser usadas e como elas estão lá estruturadas. 
Para as fazer é -> router.<o método>(<"/o endpoit/:<o parâmetro se necessário>">, middleware.checkToken(para utilizar a middleware de autenticação de token), <a const que importa o controller apropriado>.<o id de operação que está no ficheiro da api>)  */

router.post("/evento", middleware.checkToken, eventoController.createEvent);

router.delete("/evento/:id", middleware.checkToken, eventoController.deleteEvent);

router.get("/evento/:id", middleware.checkToken, eventoController.getEventByID);

router.put("/evento/:id", middleware.checkToken, eventoController.updateEvent);

router.get("/evento/:id/estudantes", eventoController.getEventStudents);

router.get("/evento/:id/desafio", middleware.checkToken, eventoController.getChallengeOfEvent);

router.put("/evento/:id/desafio-perguntas", middleware.checkToken, eventoController.getQuestionsForEvent);



module.exports = router;