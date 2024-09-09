const ObjectId = require("mongoose").Types.ObjectId

// Validating user required attributes
const validateUser = (req, res, next) => {
    let errors = []

    validateRequiredAttribute(errors, req.body.name, "name")
    validateRequiredAttribute(errors, req.body.email, "email")
    validateRequiredAttribute(errors, req.body.password, "password")
    validateRequiredAttribute(errors, req.body.image, "image")

    if(errors.length == 1){
        return res.status(400).send({
            message: `O campo ${errors} é obrigatório.`
        })
    }
    else if(errors.length > 1){
        return res.status(400).send({
            message: `Os campos ${errors} são obrigatórios.`
        })
    }
    else{
        return next()
    }
}

const validateProduct = (req, res, next) => {
    let errors = []

    validadeRequiredAttribute(errors, req.body.name, "name")
    validadeRequiredAttribute(errors, req.body.description, "description")
    validadeRequiredAttribute(errors, req.body.unitPrice, "unitPrice")
    validadeRequiredAttribute(errors, req.body.image, "image")
    validadeRequiredAttribute(errors, req.body.barcode, "barcode")
    
    if(errors.length == 1){
        return res.status(400).send({
            message: `O campo ${errors} é obrigatório.`
        })
    }
    else if(errors.length > 1){
        return res.status(400).send({
            message: `Os campos ${errors} são obrigatórios.`
        })
    }
    else{
        return next()
    }
}

const validateCategory = (req, res, next) => {
    let errors = []

    validateRequiredAttribute(errors, req.body.name, "name")

    if(errors.length == 1){
        return res.status(400).send({
            message: `O campo ${errors} é obrigatório.`
        })
    }
    else{
        return next()
    }
}

const validateOrder = (req, res, next) => {
    let errors = []

    validateRequiredAttribute(errors, req.body.products, "products")
    validateRequiredAttribute(errors, req.body.totalPrice, "totalPrice")
    validateRequiredAttribute(errors, req.body.shipping, "shipping")

    if(errors.length == 1){
        return res.status(400).send({
            message: `O campo ${errors} é obrigatório.`
        })
    }
    else if(errors.length > 1){
        return res.status(400).send({
            message: `Os campos ${errors} são obrigatórios.`
        })
    }
    else{
        return next()
    }
}

const validateShoppingCart = (req, res, next) => {
    let errors = []

    validateRequiredAttribute(errors, req.body.products, "products")
    validateRequiredAttribute(errors, req.body.totalPrice, "totalPrice")
    validateRequiredAttribute(errors, req.body.shipping, "shipping")

    if(errors.length == 1){
        return res.status(400).send({
            message: `O campo ${errors} é obrigatório.`
        })
    }
    else if(errors.length > 1){
        return res.status(400).send({
            message: `Os campos ${errors} são obrigatórios.`
        })
    }
    else{
        return next()
    }
}

const validateId = (req, res, next) => {
    if(ObjectId.isValid(req.params.id)){
        return next();
    }
    else{
        return res.status(400).send({
            message: `O ID informado não é válido.`
        })
    }
}

const validateLogin = (req, res, next) => {
    let errors = []

    validateRequiredAttribute(errors, req.body.email, "email")
    validateRequiredAttribute(errors, req.body.password, "password")

    if(errors.length == 1){
        return res.status(400).send({
            message: `O campo ${errors} é obrigatório.`
        })
    }
    else if(errors.length > 1){
        return res.status(400).send({
            message: `Os campos ${errors} são obrigatórios.`
        })
    }
    else{
        return next()
    }
}

// Private function 
const validateRequiredAttribute = (errorArray, attribute, label) => {
    if(!attribute){
        errorArray.push(label)
    }
}

module.exports = {
    validateUser,
    validateProduct,
    validateCategory,
    validateOrder,
    validateShoppingCart,
    validateId,
    validateLogin
}