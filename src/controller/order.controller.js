const orderService = require("../service/order.service")

const findOrderById = async (req, res) => {
    try{
        const order = await orderService.findOrderById(req.params.id)
        return res.status(200).send(order)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findAllOrders = async (req, res) => {
    try{
        const orders = await orderService.findAllOrders(req.query.limit, req.query.offset)
        return res.status(200).send(orders)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const createOrder = async (req, res) => {
    try{
        const body = {
            ...req.body,
            userId: req.userId
        }
        const order = await orderService.createOrder(body)
        return res.status(201).send(order)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const removeOrder = async (req, res) => {
    try{
        const order = await orderService.removeOrder(req.params.id)
        return res.status(200).send(order)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const updateOrderStatus = async (req, res) => {
    try{
        const order = await orderService.updateOrderStatus(req.params.id)
        return res.status(200).send(order)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

module.exports = {
    findOrderById,
    findAllOrders,
    createOrder,
    removeOrder,
    updateOrderStatus
}