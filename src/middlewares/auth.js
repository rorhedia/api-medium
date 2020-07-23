
const jwt = require('../lib/jwt')
const Users = require ('../models/users.model')

async function  auth(req, res, next){
    try {
        const{authorization} = req.headers
        console.log('auth: ', authorization)
        const decodedToken = jwt.verify(authorization)
        console.log(' decoded token; ', decodedToken)
        const userModel = await Users.findById(decodedToken.id)
        req.userModel=userModel
        next()
    } catch (error) {
        res.json({
            success: false,
            error: error.message
        })
    }

}

module.export=auth