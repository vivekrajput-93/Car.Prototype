const express = require("express");
const { create, signIn } = require("../../controllers/auth-controller");
const { validateAuth } = require("../../middlewares/auth-middleware");

const router = express.Router();

router.post("/auth/register", validateAuth, create);

router.post("/auth/login", validateAuth, signIn)

module.exports = router;