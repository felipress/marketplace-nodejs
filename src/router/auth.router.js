const express = require("express")
const router = express.Router()
const authController = require("../controller/auth.controller")
const {validateLogin} = require("../middleware/validation.middleware")

router.post("/login", validateLogin, authController.login)

module.exports = router