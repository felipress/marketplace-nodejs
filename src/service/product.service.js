const Product = require("../model/Product")

const findProductById = (id) => {
    return Product.findById(id)
}

const findAllProducts = () => {
    return Product.find()
}

const createProduct = (body) => {
    return Product.create(body)
}

const updateProduct = (id, body) => {
    return Product.findByIdAndUpdate(id, body, {returnDocument: "after"})
}

const removeProduct = (id) => {
    return Product.findByIdAndDelete(id)
}

module.exports = {
    findProductById,
    findAllProducts,
    createProduct,
    updateProduct,
    removeProduct
}