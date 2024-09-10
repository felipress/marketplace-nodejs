const router = require("express").Router()
const productController = require("../controller/product.controller")
const authMiddleware = require("../middleware/auth.middleware")
const {validateProduct, validateIdBody} = require("../middleware/validation.middleware")
const {validateIdParams} = require("../middleware/validation.middleware")
const pagination = require("../middleware/pagination.middleware")

// Product
router.get("/findById/:id", authMiddleware, validateIdParams, productController.findProductById)
router.get("/findAll", authMiddleware, pagination, productController.findAllProducts)
router.post("/create", authMiddleware, validateIdParams, validateProduct, productController.createProduct)
router.put("/update/:id", authMiddleware, validateIdParams, validateProduct, productController.updateProduct)
router.delete("/remove/:id", authMiddleware, validateIdParams, productController.removeProduct)

// Product category
router.post("/addProductCategory/:id", authMiddleware, validateIdParams, validateIdBody, productController.addProductCategory)
router.delete("/removeProductCategory/:id", authMiddleware, validateIdParams, productController.removeProductCategory)

module.exports = router