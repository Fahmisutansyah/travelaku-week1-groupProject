const userGoogle = require('../models/userGoogle')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_GOOGLE);

class UserGoogle{
    static googleSignIn(req, res, next){
        let payload
      
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.CLIENT_GOOGLE
        })
        .then(ticket => {
            payload = ticket.getPayload()

            return userGoogle.findOne({ email : payload.email})
        })
        .then( user => {
            if(user){
                let token = Helper.generateJWT({name : user.name, email: user.email, picture: user.ticket})
                res.status(200).json({token})
            } else {
                userGoogle.create({name : payload.name, email: payload.email, picture: payload.ticket})
                .then( userData => {
                    let token = Helper.generateJWT({name : userData.name, email: userData.email, picture: userData.ticket})
                    res.status(200).json({token})
                })
                .catch(err => {
                    next(err)
                })
            }
        })
        .catch( err =>{
            next(err)
        })
    }

}

module.exports = UserGoogle