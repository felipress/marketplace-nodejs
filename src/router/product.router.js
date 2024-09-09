const router = require("express").Router()
const productController = require("../controller/product.controller")
const authMiddleware = require("../middleware/auth.middleware")
const {validateProduct} = require("../middleware/validation.middleware")

// Product
router.get("/findById/:id", authMiddleware, productController.findProductById)
router.get("/findAll", authMiddleware, productController.findAllProducts)
router.post("/create", authMiddleware, validateProduct, productController.createProduct)
router.put("/update/:id", authMiddleware, validateProduct, productController.updateProduct)
router.delete("/remove/:id", authMiddleware, productController.removeProduct)

// Product category
router.post("/addProductCategory/:id", authMiddleware, productController.addProductCategory)
router.delete("/removeProductCategory/:id", authMiddleware, productController.removeProductCategory)

module.exports = router