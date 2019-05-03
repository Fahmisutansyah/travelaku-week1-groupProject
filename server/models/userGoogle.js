const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userGoogleSchema = new Schema({
    name : {
        type : String,
        required : [true]
    },
    email : {
        type : String,
        required : [true]
    }
})

const userGoogle = mongoose.model('userGoogle',  userGoogleSchema)

module.exports = userGoogle