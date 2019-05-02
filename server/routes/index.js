const router = require('express').Router()
const Currency = require('../controllers/currrency')
const City = require('../controllers/city')
const Country = require('../controllers/country')

router.get('/currency', Currency.getCurrency)
router.get('/cities', City.getCity)
router.get('/country', Country.getAllCountry)

module.exports = router