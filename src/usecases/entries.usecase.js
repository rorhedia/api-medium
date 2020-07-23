
const Entries = require('../models/entries.model')

const getAll = () => Entries.find()

const getById = async (id) => {
    const entries = await Entries.findById(id).exec()

    return entries
}

const createPost = post => Entries.create(post)

function findByIdAndDelete(deleteEntries) {
    return Entries.findByIdAndDelete(deleteEntries)
}
function findByIdAndUpdate(idEntries, upDateEntries) {
    return Entries.findByIdAndUpdate(idEntries, upDateEntries)
}

module.exports = {
    getAll,
    createPost,
    findByIdAndDelete,
    findByIdAndUpdate,
    getById
}