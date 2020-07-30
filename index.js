
require('dotenv').config()
const conn   = require('./src/lib/db')
const server = require('./src/server')

conn()
	.then(() => {
		console.log('DB Connect - Server is listening');
		server.listen(8081)
	})
	.catch(err => {
		console.log(err);
	})
