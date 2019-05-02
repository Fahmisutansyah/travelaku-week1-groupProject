
const axios = require('axios')

class Currency{
    static getCurrency(req, res, next){
        const { origin, destination } = req.query
  
        let originCurrency = ''
        let destCurrency = ''

        if(origin && destination){
            axios({
                method: 'GET',
                url: `https://restcountries.eu/rest/v2/name/${origin}`,
              })
              .then(({data}) => {
                originCurrency = data[0].currencies[0].code
                return axios({
                    method: 'GET',
                    url: `https://restcountries.eu/rest/v2/name/${destination}`,
                })
              })
              .then(({data}) => {
                destCurrency = data[0].currencies[data[0].currencies.length-1].code
                return axios({
                    method: 'GET',
                    url: `https://api.exchangeratesapi.io/latest?base=${originCurrency}`,
                })
              })
              .then(({data}) => {
                  if(data.rates[destCurrency] && data.base){
                    res.status(200).json({ origin: data.base, destination : destCurrency ,value : data.rates[destCurrency]})
                  } else {
                      next({message : 'Currency Not Support'})
                  }
              })
                .catch(err => {
                    next(err)
              })
        
        }
    }
}

module.exports = Currency