const router = require("express").Router()
const ShoppingCartController = require("../controller/shoppingCart.controller")
const authMiddleware = require("../middleware/auth.middleware")

router.get("/findById/:id", authMiddleware, ShoppingCartController.findShoppingCartById)
router.get("/findAll", authMiddleware, ShoppingCartController.findAllShoppingCarts)
router.post("/create", authMiddleware, ShoppingCartController.createShoppingCart)
router.put("/update", authMiddleware, ShoppingCartController.updateShoppingCart)
router.delete("/remove", authMiddleware, ShoppingCartController.removeShoppingCart)

module.exports = router