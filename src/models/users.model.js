/**
 * name
 * email
 * password
 */

const mongoose = require ('mongoose')

const usersSchemas = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        maxlength: 20,
        minlength:10
    },
    email: {
        type: String,
        require: true,
        match: /^.+@.+\..+$/ 
    },password:{
        type: String,
        required: true,
        minlength: 1
    }
})

module.exports = mongoose.model ('users', usersSchemas)