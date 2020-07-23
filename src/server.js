

const express = require('express')
const app = express()
const entriesRouter = require('./routes/entries.route')

// middlewares
app.use(express.json())

// montar routers
app.use('/entries', entriesRouter)

// test
app.get('/', (request, response) => {
    response.json({
        success: true
    })
})

module.exports = app
