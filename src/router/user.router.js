const express = require("express")
const router = express.Router()
const userController = require("../controller/user.controller")

router.get("/findById/:id", userController.findUserById)
router.get("/findAll", userController.findAllUsers)

router.post("/create", userController.createUser)
router.post("/addAddress/:id", userController.addUserAddress)
router.post("/addFavoriteProduct/:id", userController.addUserFavoriteProduct)

router.put("/update/:id", userController.updateUser)

router.delete("/remove/:id", userController.removeUser)
router.delete("/removeAddress", userController.removeUserAddress)
router.delete("/removeFavoriteProduct", userController.removeUserFavoriteProduct)

module.exports = router