const axios = require('axios')

class Country{
    static getAllCountry(req, res, next){
        axios.get(`https://restcountries.eu/rest/v2/all`)
        .then(({data}) => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }
}

module.exports = Country