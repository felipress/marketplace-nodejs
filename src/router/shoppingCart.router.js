const router = require("express").Router()
const ShoppingCartController = require("../controller/shoppingCart.controller")
const authMiddleware = require("../middleware/auth.middleware")
const {validateShoppingCart} = require("../middleware/validation.middleware")

router.get("/findById/:id", authMiddleware, ShoppingCartController.findShoppingCartById)
router.get("/findAll", authMiddleware, ShoppingCartController.findAllShoppingCarts)
router.post("/create", authMiddleware, validateShoppingCart, ShoppingCartController.createShoppingCart)
router.put("/update/:id", authMiddleware, validateShoppingCart, ShoppingCartController.updateShoppingCart)
router.delete("/remove/:id", authMiddleware, ShoppingCartController.removeShoppingCart)

module.exports = router