const router = require("express").Router()
const authMiddleware = require("../middleware/auth.middleware")
const orderController = require("../controller/order.controller")
const {validateOrder} = require("../middleware/validation.middleware")
const {validateId} = require("../middleware/validation.middleware")
const pagination = require("../middleware/pagination.middleware")

router.get("/findById/:id", authMiddleware, validateId, orderController.findOrderById)
router.get("/findAll", authMiddleware, pagination, orderController.findAllOrders)
router.post("/create", authMiddleware, validateOrder, orderController.createOrder)
router.delete("/remove/:id", authMiddleware, validateId, orderController.removeOrder)
router.patch("/updateStatus/:id", authMiddleware, validateId, orderController.updateOrderStatus)

module.exports = router