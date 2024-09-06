const authService = require("../service/auth.service")
const bcrypt = require("bcrypt")

const login = async (req, res) => {
    const {email, password} = req.body
    const user = await authService.login(email)
 
    const isPasswordValid = await bcrypt.compare(password, user.password)
    
    if(isPasswordValid){
        const token = authService.generateToken(user.id)
        return res.status(200).send({
            email,
            token
        })
    }
    else{
        return res.status(400).send({
            message: `Usuário não foi encontrado`
        })
    }
}

module.exports = {
    login
}