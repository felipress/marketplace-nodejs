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
const addUserAddress = (userId, userAddress) => {
    return User.findOneAndUpdate(
        {
            _id: userId
        },
        {
            $push: {
                address: userAddress
            }
        },
        {
            rawResults: true
        }
    )
}

const removeUserAddress = (userId, addressId) => {
    return User.findOneAndUpdate(
        {
            _id: userId
        },
        {
            $pull: {
                address: {
                    _id: addressId
                }
            }
        }
    )
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