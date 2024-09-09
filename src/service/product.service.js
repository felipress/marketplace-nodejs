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

const addProductCategory = (id, category) => {
    return Product.findOneAndUpdate(
        {_id: id},
        {
            $push: {
                category: {
                    _id: category.id
                }
            }
        },
        {
            rawResult: true
        }
    )
}

const removeProductCategory = (id, category) => {
    return Product.findOneAndUpdate(
        {_id: id},
        {
            $pull: {
                category: {
                    _id: category.id
                }
            }
        },
        {
            rawResult: true
        }
    )
}

module.exports = {
    findProductById,
    findAllProducts,
    createProduct,
    updateProduct,
    removeProduct,
    addProductCategory,
    removeProductCategory
}