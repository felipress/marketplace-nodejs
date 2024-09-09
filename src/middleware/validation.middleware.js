// Validating user required attributes
const validateUser = (req, res, next) => {
    if(!req.body.name){
        return res.status(400).send({
            message: `O campo nome é obrigatório.`
        })
    }
    if(!req.body.email){
        return res.status(400).send({
            message: `O campo email é obrigatório.`
        })
    }
    if(!req.body.password){
        return res.status(400).send({
            message: `O campo senha é obrigatório.`
        })
    }
    if(!req.body.image){
        return res.status(400).send({
            message: `O campo imagem é obrigatório.`
        })
    }
    return next()
}

module.exports = {
    validateUser
}