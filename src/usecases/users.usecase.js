
const Users = require ('../models/users.model')

function getAll ( ){
    return Users.find ()
}

module.exports = {
    getAll
}