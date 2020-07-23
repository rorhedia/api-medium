/**
 * title
 * author
 * date
 * content
 * urlimg
 * section
 */

const mongoose       = require('mongoose')
const entriesSchemas = new mongoose.Schemas({

    title: {
        type     : String,
        require  : true,
        maxlength: 50,
        minlength: 2
    },
    author: {
        type     : String,
        require  : true,
        maxlength: 10,
        minlength: 20

    },
    date: {
        type   : Date,
        default: Date.now
    },
    content: {
        type   : String,
        require: true
    },
    urlimg: {
        type   : String,
        require: true
    },
    section: {
        type   : String,
        require: false
    }

})

module.exports = mongoose.model('entries', entriesSchemas)