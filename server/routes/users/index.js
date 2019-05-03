const router = require('express').Router()
const User = require('../../controllers/user')

router.post('/login', User.postLogin)
router.post('/register', User.createUser)

module.exports = router