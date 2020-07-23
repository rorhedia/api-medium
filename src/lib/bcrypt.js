
const bcrypt = require('bcrypt')
const salt   = 10

const hash = plainText => bcrypt.hash(plainText, salt)

module.exports = {
	...bcrypt,
	hash
}
