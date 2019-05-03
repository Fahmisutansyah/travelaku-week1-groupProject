const router = require('express').Router()
const googlSignIn = require('../../controllers/userGoogle')

router.post('/google-sign-in', googlSignIn.googleSignIn)

module.exports = router