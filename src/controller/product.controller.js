const productService = require("../service/product.service")

const findProductById = async (req, res) => {
    try{
        const product = await productService.findProductById(req.params.id)
        return res.status(200).send({product})
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findAllProducts = async (req, res) => {
    try{
        const products = await productService.findAllProducts()
        return res.status(200).send({products})
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const createProduct = async (req, res) => {
    try{
        const body = {
            ...req.body,
            userId: req.userId
        }
        const product = await productService.createProduct(body)
        return res.status(201).send(product)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const updateProduct = async (req, res) => {
    try{
        const product = await productService.updateProduct(req.params.id, req.body)
        return res.status(200).send(product)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const removeProduct = async (req, res) => {
    try{
        const product = await productService.removeProduct(req.params.id)
        return res.status(200).send(product)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const addProductCategory = async (req, res) => {
    try{
        const category = await productService.addProductCategory(req.params.id, req.body)
        return res.status(201).send(category)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const removeProductCategory = async (req, res) => {
    try{
        const category = await productService.removeProductCategory(req.body)
        return res.status(200).send(category)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
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