module.exports = function(err, req, res, next){
    
    switch (err.message) {
        case ('Currency Not Support') : {
            res.status(500).send({ message : 'Currency Not Support'})
        }
        default : {
            res.status(500).json({ message : err.message})
        }
    }
}