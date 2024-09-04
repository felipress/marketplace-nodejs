const express = require("express")
const router = express.Router()
const userController = require("../controller/user.controller")

router.get("/findById/:id")
router.get("/findAll")

router.post("/create")
router.post("/addAddress/:id")
router.post("/addFavoriteProduct/:id")

router.put("/update/:id")

router.delete("/remove/:id")
router.delete("/removeAddress")
router.delete("/removeFavoriteProduct")

module.exports = router