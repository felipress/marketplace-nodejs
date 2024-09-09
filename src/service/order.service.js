const Order = require("../model/Order")

const findOrderById = (id) => {
    return Order.findById(id)
}

const findAllOrders = () => {
    return Order.find()
}

const createOrder = (body) => {
    return Order.create(body)
}

const removeOrder = (id) => {
    return Order.findByIdAndDelete(id)
}

const updateOrderStatus = (id, body) => {

}

module.exports = {
    findOrderById,
    findAllOrders,
    createOrder,
    removeOrder,
    updateOrderStatus
}