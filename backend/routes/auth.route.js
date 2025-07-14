const express = require("express");
const router = express.Router();

const middleware = require("../middleware");
const authController = require("../controllers/auth.controller");

router.post("/register", authController.register);
router.post("/login", authController.login);
<<<<<<< HEAD

=======
>>>>>>> branch-t-2
router.post(
  "/refresh-token",
  middleware.checkToken,
  authController.refreshToken
);
router.post("/logout", middleware.checkToken, authController.logout);

<<<<<<< HEAD


=======
>>>>>>> branch-t-2
module.exports = router;