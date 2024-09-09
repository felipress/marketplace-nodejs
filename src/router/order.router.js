const router = require("express").Router()
const authMiddleware = require("../middleware/auth.middleware")
const orderController = require("../controller/order.controller")

router.get("/findById/:id", authMiddleware, orderController.findOrderById)
router.get("/findAll", authMiddleware, orderController.findAllOrders)
router.post("/create", authMiddleware, orderController.createOrder)
router.delete("/remove/:id", authMiddleware, orderController.removeOrder)
router.patch("/updateStatus/:id", authMiddleware, orderController.updateOrderStatus)

module.exports = router