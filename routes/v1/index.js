const express = require("express");
const { create, login } = require("../../controllers/auth-controller");
const { validateAuth } = require("../../middlewares/auth-middleware");

const router = express.Router();

router.post("/auth/register", validateAuth, create);

router.post("/auth/login", validateAuth, login)

module.exports = router;