const express = require("express");
const router = express.Router();

const middleware = require("../middleware");

const estudanteController = require("../controllers/estudante.controller");

router.post("/estudante", middleware.checkToken, estudanteController.createStudent);

router.get("/estudante/:id", middleware.checkToken, estudanteController.getStudentById);

router.put("/estudante/:id", middleware.checkToken, estudanteController.updateStudent);

router.delete("/estudante/:id", middleware.checkToken, estudanteController.deleteStudent);

router.get("/estudante/:nome", middleware.checkToken, estudanteController.getStudentByName);

router.get("/estudante/:id/escola", middleware.checkToken, estudanteController.getStudantSchool);

router.get("/estudante/:id/ranking-evento", middleware.checkToken, estudanteController.getStudentEventRanking);

router.get("/estudante/:id/ranking-global", middleware.checkToken, estudanteController.getStudentGlobalRanking);


module.exports = router;