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
router.delete('/:id', async (req,res) => {
    try {
         const idEntries = req.params.id 
         const deleteEntries =  await entries.findByIdAndDelete(idEntries)

         res.json({
             success: true,
             data: {
                 deleteEntries
             }
         })
    } catch (error) {
         res.status(400),
         res.json({
             success: false,
             error: error.message
         })
    }
})

router.patch('/:id',async(req, res) => {

     try {
        const idEntries = req.params.id
        const  bodyEntries = req.body
    
        const idUpDateEntries = await entries.findByIdAndUpdate(idEntries, bodyEntries)
        res.json({
            success: true,
            data:{
                idUpDateEntries
            }
        }) 
     } catch (error) {
         res.status(400)
         resp.json({
             success:false,
             error: error.message
         })
         
     }

})

module.exports = router