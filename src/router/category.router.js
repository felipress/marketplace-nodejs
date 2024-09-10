const router = require("express").Router()
const authMiddleware = require("../middleware/auth.middleware")
const categoryController = require("../controller/category.controller")
const {validateCategory} = require("../middleware/validation.middleware")
const {validateIdParams} = require("../middleware/validation.middleware")

router.get("/findById/:id", authMiddleware, validateIdParams, categoryController.findCategoryById)
router.get("/findAll", authMiddleware, categoryController.findAllCategories)
router.post("/create", authMiddleware, validateCategory, categoryController.createCategory)
router.put("/update/:id", authMiddleware, validateIdParams, validateCategory, categoryController.updateCategory)
router.delete("/remove/:id", authMiddleware, validateIdParams, categoryController.removeCategory)

module.exports = router