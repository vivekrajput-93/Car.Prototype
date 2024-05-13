const express = require("express");
const { create, login, resetPassword, forgotPassword } = require("../../controllers/auth-controller");
const { validateAuth } = require("../../middlewares/auth-middleware");

const router = express.Router();

router.post("/auth/register", validateAuth, create);

router.post("/auth/login", validateAuth, login);

router.post("/auth/reset-password/:id/token", resetPassword);
router.post("/auth/forgot-password", forgotPassword)

module.exports = router;