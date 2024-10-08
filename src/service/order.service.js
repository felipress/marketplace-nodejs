const Order = require("../model/Order")

const findOrderById = (id) => {
    return Order.findById(id)
}

const findAllOrders = (limit, offset) => {
    return Order.find().limit(limit).skip(offset)
}

const createOrder = (body) => {
    return Order.create(body)
}

const removeOrder = (id) => {
    return Order.findByIdAndDelete(id)
}

const updateOrderStatus = (id) => {
    return Order.findOneAndUpdate(
        {
            _id: id
        },
        {
            $set: {finished: true}
        }
    )
}

module.exports = {
    findOrderById,
    findAllOrders,
    createOrder,
    removeOrder,
    updateOrderStatus
}