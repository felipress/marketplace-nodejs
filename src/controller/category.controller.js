const categoryService = require("../service/category.service")

const findCategoryById = async (req, res) => {
    try{
        const category = await categoryService.findCategoryById(req.params.id)
        return res.status(200).send(category)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findAllCategories = async (req, res) => {
    try{
        const categories = await categoryService.findAllCategories()
        return res.status(200).send(categories)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const createCategory = async (req, res) => {
    try{
        const category = await categoryService.createCategory(req.body)
        return res.status(201).send(category)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const updateCategory = async (req, res) =>{
    try{
        const category = await categoryService.updateCategory(req.params.id, req.body)
        return res.status(200).send(category)
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const removeCategory = async (req, res) => {
    try{
        const category = await categoryService.removeCategory(req.params.id)
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
    findCategoryById,
    findAllCategories,
    createCategory,
    updateCategory,
    removeCategory
}