const Category = require("../model/Category")

const findCategoryById = (id) => {
    return Category.findById(id)
}

const findAllCategories = () => {
    return Category.find()
}

const createCategory = (body) => {
    return Category.create(body)
}

const updateCategory = (id, body) => {
    return Category.findByIdAndUpdate(id, body, {returnDocument: "after"})
}

const removeCategory = (id) => {
    return Category.findByIdAndDelete(id)
}

module.exports = {
    findCategoryById,
    findAllCategories,
    createCategory,
    updateCategory,
    removeCategory
}