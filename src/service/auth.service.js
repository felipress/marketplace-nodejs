const User = require("../model/User")
const jwt = require("jsonwebtoken")

const login = (email) => {
    return User.findOne({email: email}).select("password")
}

const generateToken = (userId) => {
    return jwt.sign({id: userId}, "7124jkj!&$*14rm1012091949!)(*$908AnajJKSmka71480", {expiresIn: 86400})
}

module.exports = {
    login,
    generateToken
}