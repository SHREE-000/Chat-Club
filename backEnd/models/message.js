
  
const mongoose = require('mongoose')

const msgSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    }
})

const Message = new mongoose.model('message', msgSchema)

module.exports = Message;