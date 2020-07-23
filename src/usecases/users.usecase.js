
const Users  = require('../models/users.model')
const bcrypt = require('../lib/bcrypt')
const jwt    = require('../lib/jwt')

const getAll = () => Users.find()

const getById = async (id) => await Users.findById(id).exec()

const createUser = userData => Users.create(userData)

const update = (idUser, userToUpdate) => Users.findByIdAndUpdate(idUser, userToUpdate)

const deleteUser = idUser => Users.findByIdAndRemove(idUser)

const signup = async userData => {

    const { email, password } = userData

    const userExist = await Users.findOne({ email })

    if (userExist) throw new Error("El usuario ya existe")

    const paswdEncripted = await bcrypt.hash(password)

    return Users.create({
        ...userData,
        password: paswdEncripted
    })
}

const login = async (email, password) => {

    const userByEmail = await Users.findOne({ email })

    if (!userByEmail) throw new Error('Usuario o contraseña inválidos')

    const passwdIsValid = await bcrypt.compare(password, userByEmail.password)

    if (!passwdIsValid) throw new Error('Usuario o contraseña inválidos')

    return jwt.sign({ id: userByEmail._id })
}

module.exports = {
    getAll,
    createUser,
    update,
    deleteUser,
    signup,
    login,
    getById
}