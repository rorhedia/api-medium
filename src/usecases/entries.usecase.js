
const Entries = require('../models/entries.model')

const getAll = async () => await Entries.find()

const getById = async id => await Entries.findById(id).exec()

const createPost = async post => await Entries.create(post)

const findByIdAndDelete = async (deleteEntries) => await Entries.findByIdAndDelete(deleteEntries)

const findByIdAndUpdate = async (idEntries, upDateEntries) => await Entries.findByIdAndUpdate(idEntries, upDateEntries, {new: true})

module.exports = {
	getAll,
	createPost,
	findByIdAndDelete,
	findByIdAndUpdate,
	getById
}
