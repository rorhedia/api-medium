
const Entries = require('../models/entries.model')

const getAll = () => Entries.find()

const createPost = post => Entries.create(post)

module.exports = {
    getAll,
    createPost
}