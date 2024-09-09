const router = require("express").Router()
const ShoppingCartController = require("../controller/shoppingCart.controller")
const authMiddleware = require("../middleware/auth.middleware")
const {validateShoppingCart} = require("../middleware/validation.middleware")
const {validateId} = require("../middleware/validation.middleware")
const pagination = require("../middleware/pagination.middleware")

router.get("/findById/:id", authMiddleware, validateId, ShoppingCartController.findShoppingCartById)
router.get("/findAll", authMiddleware, pagination, ShoppingCartController.findAllShoppingCarts)
router.post("/create", authMiddleware, validateShoppingCart, ShoppingCartController.createShoppingCart)
router.put("/update/:id", authMiddleware, validateId, validateShoppingCart, ShoppingCartController.updateShoppingCart)
router.delete("/remove/:id", authMiddleware, validateId, ShoppingCartController.removeShoppingCart)

module.exports = router