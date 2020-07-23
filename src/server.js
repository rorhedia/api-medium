

const express = require('express')
const app = express()
const entriesRouter = require('./routes/entries.route')
const usersRouter = require ('./routes/users.route')

// middlewares
app.use(express.json())

// montar routers
app.use('/entries', entriesRouter)
app.use ('/users', usersRouter)

// test
app.get('/', (request, response) => {
    response.json({
        success: true
    })
})

module.exports = app
