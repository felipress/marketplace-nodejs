const User = require("../model/User")

// User functions 
const findUserById = (id) => {
    return User.findById(id)
}

const findAllUsers = () => {
    return User.find()
}

const createUser = (body) => {
    return User.create(body)
}

const updateUser = (id, body) => {
    return User.findByIdAndUpdate(id, body, {returnDocument: "after"})
}

const removeUser = (id) => {
    return User.findByIdAndDelete(id)
}

// User address functions
const addUserAddress = (id, address) => {

}

const removeUserAddress = (id) => {

}

// User favorite products
const addUserFavoriteProduct = (id, product) => {

}

const removeUserFavoriteProduct = (id) => {

}

module.exports = {
    findUserById,
    findAllUsers,
    createUser,
    updateUser,
    removeUser,
    addUserAddress,
    removeUserAddress,
    addUserFavoriteProduct,
    removeUserFavoriteProduct
}