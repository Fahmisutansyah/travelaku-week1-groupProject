const axios = require('axios');

module.exports = (req, res) => {
    axios
        .get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${req.body.location}.json?access_token=pk.eyJ1IjoiZW1yaWRvIiwiYSI6ImNqdHBtanJscjAza2U0M3FubHZnenY2OXIifQ.J_nz5SzXKkKjZBiLmlBE-g&limit=1`)
        .then(({data}) => {
            const [latitude, longitude] = data.features[0].center
            return axios.get(`https://api.darksky.net/forecast/98cf11eecb2b739352444e245a49c8b4/${longitude},${latitude}?units=si&lang=id`)
        })
        .then(({data}) => {
            res.status(200).json({ 
                kesimpulan: data.currently.summary + ` dengan kemungkinan hujan sebesar ${data.currently.precipProbability * 100} %`,
                data
            })
        })        
        .catch(err => {
            res.status(500).json({
                message: err.message
            });
        })
}
