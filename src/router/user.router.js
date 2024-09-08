const express = require("express")
const router = express.Router()
const userController = require("../controller/user.controller")

const authMiddleware = require("../middleware/auth.middleware")

// GET routes
router.get("/findById/:id", authMiddleware, userController.findUserById)
router.get("/findAll", userController.findAllUsers)

// POST routes
router.post("/create", userController.createUser)
router.post("/addAddress/:id", authMiddleware, userController.addUserAddress)
router.post("/addFavoriteProduct/:id", authMiddleware, userController.addUserFavoriteProduct)

// PUT route
router.put("/update/:id", authMiddleware, userController.updateUser)

// DELETE routes
router.delete("/remove/:id", authMiddleware, userController.removeUser)
router.delete("/removeAddress", authMiddleware, userController.removeUserAddress)
router.delete("/removeFavoriteProduct/:id", authMiddleware, userController.removeUserFavoriteProduct)

module.exports = router