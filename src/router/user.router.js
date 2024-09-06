const express = require("express")
const router = express.Router()
const userController = require("../controller/user.controller")

const authMiddleware = require("../middleware/auth.middleware")

// GET routes
router.get("/findById/:id", authMiddleware, userController.findUserById)
router.get("/findAll", userController.findAllUsers)

// POST routes
router.post("/create", userController.createUser)
router.post("/addAddress/:id", userController.addUserAddress)
router.post("/addFavoriteProduct/:id", userController.addUserFavoriteProduct)

// PUT route
router.put("/update/:id", userController.updateUser)

// DELETE routes
router.delete("/remove/:id", userController.removeUser)
router.delete("/removeAddress", userController.removeUserAddress)
router.delete("/removeFavoriteProduct", userController.removeUserFavoriteProduct)

module.exports = router