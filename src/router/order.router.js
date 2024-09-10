const router = require("express").Router()
const authMiddleware = require("../middleware/auth.middleware")
const orderController = require("../controller/order.controller")
const {validateOrder} = require("../middleware/validation.middleware")
const {validateIdParams} = require("../middleware/validation.middleware")
const pagination = require("../middleware/pagination.middleware")

router.get("/findById/:id", authMiddleware, validateIdParams, orderController.findOrderById)
router.get("/findAll", authMiddleware, pagination, orderController.findAllOrders)
router.post("/create", authMiddleware, validateOrder, orderController.createOrder)
router.delete("/remove/:id", authMiddleware, validateIdParams, orderController.removeOrder)
router.patch("/updateStatus/:id", authMiddleware, validateIdParams, orderController.updateOrderStatus)

module.exports = router