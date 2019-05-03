const router = require('express').Router()
const Currency = require('../controllers/currrency')
const City = require('../controllers/city')
const Country = require('../controllers/country')
const User = require('./users')
const userGoogle = require('./oauth')

router.use('/users', User)
router.get('/currency', Currency.getCurrency)
router.get('/cities', City.getCity)
router.get('/country', Country.getAllCountry)
router.use('/oauth', userGoogle)

module.exports = router