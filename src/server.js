
const express       = require('express')
const app           = express()
const entriesRouter = require('./routes/entries.route')
const usersRouter   = require('./routes/users.route')
const authRouter    = require('./routes/auth.route')
const cors          = require('cors')

// middlewares
app.use(cors())
app.use(express.json())


// montar routers
app.use('/entries', entriesRouter)
app.use('/users', usersRouter)
app.use('/auth', authRouter)

// test
app.get('/', (request, response) => {
	response.json({
		success: true
	})
})

module.exports = app
