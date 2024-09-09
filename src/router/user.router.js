const express = require("express")
const router = express.Router()
const userController = require("../controller/user.controller")

const authMiddleware = require("../middleware/auth.middleware")
const {validateUser} = require("../middleware/validation.middleware")
const {validateId} = require("../middleware/validation.middleware")

// GET routes
router.get("/findById/:id", authMiddleware, validateId, userController.findUserById)
router.get("/findAll", userController.findAllUsers)

// POST routes
router.post("/create", validateUser, userController.createUser)
router.post("/addAddress/:id", authMiddleware, validateId, userController.addUserAddress)
router.post("/addFavoriteProduct/:id", authMiddleware, validateId, userController.addUserFavoriteProduct)

// PUT route
router.put("/update/:id", authMiddleware, validateId, validateUser, userController.updateUser)

// DELETE routes
router.delete("/remove/:id", authMiddleware, validateId, userController.removeUser)
router.delete("/removeAddress", authMiddleware, userController.removeUserAddress)
router.delete("/removeFavoriteProduct/:id", validateId, authMiddleware, userController.removeUserFavoriteProduct)

module.exports = router