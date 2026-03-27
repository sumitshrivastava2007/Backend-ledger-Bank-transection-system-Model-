const express = require("express")
const authController = require("../controllers/auth.controller")

const router = express.Router()

//api for registration

router.post("/register",authController.userRegisterController)

//api for login 

router.post("/login",authController.userLoginController)

module.exports = router 