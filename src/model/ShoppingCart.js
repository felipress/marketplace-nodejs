const mongoose = require("mongoose")

const ShoppingCartSchema = new mongoose.Schema({
    products: [
        {
            _id: {type: mongoose.Schema.Types.ObjectId, ref: "products"},
            quantity: {type: Number, required: true}

        }
    ],
    createdAt: {type: Date, default: Date.now()},
    totalPrice: {type: Number, required: true},
    shipping: {type: Number, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "users"}
})

const ShoppingCart = mongoose.model("shoppingcarts", ShoppingCartSchema)

module.exports = ShoppingCart

