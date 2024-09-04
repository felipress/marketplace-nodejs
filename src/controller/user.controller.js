const findUserById = async (req, res) => {
    try{

    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const findAllUsers = async (req, res) => {
    try{

    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const createUser = async (req, res) => {
    try{

    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const addUserAddress = async (req, res) => {
    try{

    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const addUserFavoriteProduct = async (req, res) => {
    try{
        
    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const updateUser = async (req, res) => {
    try{

    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const removeUser = async (req, res) => {
    try{

    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const removeUserAddress = async (req, res) => {
    try{

    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

const removeUserFavoriteProduct = async (req, res) => {
    try{

    }
    catch(err){
        console.log(`Erro: ${err.message}`)
        res.status(500).send({
            message: `Aconteceu um erro inesperado. Tente novamente!`
        })
    }
}

module.exports = {
    findUserById,
    findAllUsers,
    createUser,
    addUserAddress,
    addUserFavoriteProduct,
    updateUser,
    removeUser,
    removeUserAddress,
    removeUserFavoriteProduct
}