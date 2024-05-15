const express = require("express");
const { create, login, resetPassword, forgotPassword } = require("../../controllers/auth-controller");
const { validateAuth, isAdmin, requiredSignIn } = require("../../middlewares/auth-middleware");

const router = express.Router();

router.post("/auth/register", validateAuth, create);

router.post("/auth/login", validateAuth, login);

router.post("/auth/reset-password/:id/token", resetPassword);
router.post("/auth/forgot-password", forgotPassword)


// ADMIN Dashboard Route
router.get("/auth/admin-auth", requiredSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok : true});
})

module.exports = router;