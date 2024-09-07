const mongoose = require("mongoose")

const ProdutoSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    description: {type: String, required: true},
    unitPrice: {type: Number, required: true},
    image: {type: String, required: true},
    barcode: {type: Number, unique: true, required: true},
    /*category: [
        {
            _id: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "categories"},
            createAt: {type: Date, required: true, default: Date.now()}
        }
    ]*/
})

const Product = mongoose.model("products", ProdutoSchema)

module.exports = Product