const express = require('express')
const router = express.Router()
const entries = require('../usecases/entries.usecase')

router.get('/', async (request, response) => {
    try {
        const dataPosts = await entries.getAll()
        response.json({
            success: true,
            data: dataPosts
        })
    } catch (error) {
        response.json({
            success: false,
            error: error.message
        })
    }
})

router.post('/', async (request, response) => {
    try {
        const dataPosts = await entries.createPost(request.body)
        response.json({
            success: true,
            data: dataPosts
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router