const router = require("express").Router()
const authMiddleware = require("../middleware/auth.middleware")
const categoryController = require("../controller/category.controller")
const {validateCategory} = require("../middleware/validation.middleware")

router.get("/findById/:id", authMiddleware, categoryController.findCategoryById)
router.get("/findAll", authMiddleware, categoryController.findAllCategories)
router.post("/create", authMiddleware, validateCategory, categoryController.createCategory)
router.put("/update/:id", authMiddleware, validateCategory, categoryController.updateCategory)
router.delete("/remove/:id", authMiddleware, categoryController.removeCategory)

module.exports = router