const express = require("express");
const { create, login, resetPassword, forgotPassword, testController } = require("../../controllers/auth-controller");
const { validateAuth, isAdmin, requiredSignIn } = require("../../middlewares/auth-middleware");

const router = express.Router();

router.post("/auth/register", validateAuth, create);

router.post("/auth/login", validateAuth, login);

router.post("/auth/reset-password/:id/token", resetPassword);
router.post("/auth/forgot-password", forgotPassword)







module.exports = router;