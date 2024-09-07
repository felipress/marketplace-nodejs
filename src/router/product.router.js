const router = require("express").Router()
const productController = require("../controller/product.controller")
const authMiddleware = require("../middleware/auth.middleware")

router.get("/findById/:id", authMiddleware, productController.findProductById)
router.get("/findAll", authMiddleware, productController.findAllProducts)
router.post("/create", authMiddleware, productController.createProduct)
router.put("/update/:id", authMiddleware, productController.updateProduct)
router.delete("/remove/:id", authMiddleware, productController.removeProduct)

module.exports = router