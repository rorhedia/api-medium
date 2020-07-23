
const express = require ('express')

const router = express.Router ( )

const users = require ('../usecases/users.usecase')

router.get ('/', async (request, response) => {
    try {
        const allUsers = await users.getAll ()

        response.json ({
            success: true,
            data:{
                courses: allUsers
            }
        })
    } catch (error) {
        response.status (error.status || 400)
        response.json ({
            success:false,
            error: error.message
        })
    }

})

router.post('/', async (request,response) => {
    try {
        const newUserData = request.body
        const newUser = await users.createUser(newUserData)

        response.json ({
            success: true,
            data: {
                newUser
            }
        })
    } catch (error) {
        response.status (error.status || 400)
        response.json({
            success:false,
            error: error.message
        })
    }
})

router.patch('/:id' , async (request, response) =>{
    try {
      const id = request.params.id
      const userToUpdate = request.body
      const userUpdated = await users.update(id,userToUpdate)
      response.json({
          success: true,
          data: {
            userUpdated
          }
      })
    } catch (error) {
      response.status(error.status || 400)
      response.json({
          success: false,
          error: error.message
      })
    }
  })
  
  router.delete('/:id',async (request,response)=>{
    try {
        const id = request.params.id
        const userDeleted = await users.deleteUser(id)
        response.json({
            success: true,
            data:{
                userDeleted
            }
        })
    } catch (error) {
        response.status(error.status || 400)
        response.json({
            success: false,
            error: error.message
        })
    }
})

module.exports = router