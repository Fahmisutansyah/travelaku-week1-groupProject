module.exports = function(err, req, res, next){
    
    switch (err.message) {
        case ('Currency Not Support') : {
            res.status(500).json({ message : 'Currency Not Support'})
        }
        case ('incorrect password') : {
            res.status(400).json({message : 'incorrect password'})
        }
        case ('user not yet registered') : {
            res.status(400).json({message : 'user not yet registered'})
        }
        default : {
            res.status(500).json({ message : err.message})
        }
    }
}