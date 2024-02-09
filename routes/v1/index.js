const express = require("express");
const { create, signIn } = require("../../controllers/auth-controller");
const { validateAuth } = require("../../middlewares/auth-middleware");

const router = express.Router();

router.post("/register", validateAuth, create);

router.post("/login", validateAuth, signIn)

module.exports = router;