const { string } = require('joi')
const mongoose = require('mongoose')

const userShema = new mongoose.Schema({
    mail : {type : String, unique : true},
    password : {type : String},
    username : {type : String}
})

module.exports = mongoose.model('user', userShema)