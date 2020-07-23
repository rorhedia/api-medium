

const express = require('express')
const app = express()

// middlewares


// montar routers


// test
app.get('/', (request, response) => {
    response.json({
        success: true
    })
})

module.exports = app
