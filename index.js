
require('dotenv').config()
const conn = require('./src/lib/db')
const server = require('./src/server')

conn()
    .then(async () => {
        console.log('DB Connect');
        await server.listen(8081)
    })
    .catch(err => {
        console.log(err);
    })