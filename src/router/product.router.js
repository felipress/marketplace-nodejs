const router = require("express").Router()
const productController = require("../controller/product.controller")
const authMiddleware = require("../middleware/auth.middleware")
const {validateProduct} = require("../middleware/validation.middleware")
const {validateId} = require("../middleware/validation.middleware")
const pagination = require("../middleware/pagination.middleware")

// Product
router.get("/findById/:id", authMiddleware, validateId, productController.findProductById)
router.get("/findAll", authMiddleware, pagination, productController.findAllProducts)
router.post("/create", authMiddleware, validateId, validateProduct, productController.createProduct)
router.put("/update/:id", authMiddleware, validateId, validateProduct, productController.updateProduct)
router.delete("/remove/:id", authMiddleware, validateId, productController.removeProduct)

// Product category
router.post("/addProductCategory/:id", authMiddleware, validateId, productController.addProductCategory)
router.delete("/removeProductCategory/:id", authMiddleware, validateId, productController.removeProductCategory)

module.exports = router