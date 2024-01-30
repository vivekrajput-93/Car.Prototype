const express = require("express");
const { create, signIn } = require("../../controllers/auth-controller");

const router = express.Router();

router.post("/register", create);

router.post("/login", signIn)

module.exports = router;