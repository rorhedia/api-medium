
const Users = require ('../models/users.model')

const getAll = () => Users.find()

const createUser = userData => Users.create(userData)

const update = (idUser, userToUpdate) => Users.findByIdAndUpdate(idUser, userToUpdate)

const deleteUser = idUser => Users.findByIdAndRemove(idUser)

module.exports = {
    getAll,
    createUser,
    update,
    deleteUser
}