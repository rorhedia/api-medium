
const express = require('express')

const users = require('../usecases/users.usecase')

const router = express.Router()

router.post('/sign-up', async (request, response) => {
	try {
		const signedUpUser = await users.signup(request.body)
		response.json({
			success: true,
			data   : {
				signedUpUser
			}
		})
	} catch (error) {
		response.status(400)
		response.json({
			success: false,
			error  : error.message
		})
	}
})

router.post('/sign-in', async (request, response) => {
	try {
		const {password, email} = request.body
		const token             = await users.login(email, password)
		response.json({
			success: true,
			data   : {
				token
			}
		})
	} catch (error) {
		response.status(401)
		response.json({
			success: false,
			error  : error.message
		})
	}
})


module.exports = router
