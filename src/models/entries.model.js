/**
 * title
 * author
 * date
 * content
 * urlimg
 * section
 */

const mongoose       = require('mongoose')
const entriesSchemas = new mongoose.Schema({
	title  : {
		type     : String,
		required : true,
		maxlength: 50,
		minlength: 2
	},
	author : {
		type     : String,
		required : true,
		maxlength: 20,
		minlength: 10

	},
	date   : {
		type   : Date,
		default: Date.now
	},
	content: {
		type    : String,
		required: true
	},
	urlimg : {
		type    : String,
		required: true
	},
	section: {
		type    : String,
		required: true
	}
})

module.exports = mongoose.model('entries', entriesSchemas)
