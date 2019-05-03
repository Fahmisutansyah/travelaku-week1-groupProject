const axios = require('axios')

class City{
    static getCity(req, res, next){
        const { country } = req.query
        axios.get(`https://www.triposo.com/api/20181213/location.json?part_of=${country}&tag_labels=city&count=10&order_by=-score&fields=name,id,snippet,parent_id,score,type,images`, {headers : {
            "X-Triposo-Account" : '554JN6K6' , "X-Triposo-Token" : '6qxx6luhn0k0fhlou5m4h52poe8c0fjp'
        }})
        .then(({data})=> {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }   
}

module.exports = City