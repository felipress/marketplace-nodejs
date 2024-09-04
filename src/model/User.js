const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    image: {type: String},
    address: [
        {
            street: {type: String, required: true},
            number: {type: Number, required: true},
            complement: {type: String, required: false},
            zipcode: {type: String, required: true},
            createdAt: {type: Date, required: true, default: Date.now()}
        }
    ],
    createAt: {type: Date, required: true, default: Date.now()},
    favorite_products: [
        {
            _id: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "products"},
            createdAt: {type: Date, required: true, default: Date.now()}
        }
    ],
    adminUser: {type: Boolean, required: true, default: false}
})

const User = mongoose.model("users", UserSchema)

module.exports = User