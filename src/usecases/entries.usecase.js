
const Entries = require('../models/entries.model')

const getAll = () => Entries.find()

const createPost = post => Entries.create(post)

function findByIdAndDelete(deleteEntries){
    return Entries.findByIdAndDelete(deleteEntries)
}
function findByIdAndUpdate(idEntries, upDateEntries){
    return Entries.findByIdAndUpdate(idEntries, upDateEntries)
}

module.exports = {
    getAll,
    createPost,
    findByIdAndDelete,
    findByIdAndUpdate
}