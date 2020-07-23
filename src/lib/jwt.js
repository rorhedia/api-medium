
const jwt = require('jsonwebtoken')
const {JWT_SECRET}=process.env

function singn(payload = {}){
    return jwt.singn(payload, JWT_SECRET, {expiresIn: '2d'})
}
function verify(token){
    jwt.verify(token,JWT_SECRET)
}

module.exports ={
    ...jwt,
    singn,
    verify
}