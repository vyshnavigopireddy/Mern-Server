const mongoose = require('mongoose')

const BookSchema = mongoose.Schema(
    {
        _id:{
            type: String,
            required: true,
        },
        name:{
            type: String,
            required: true,
        },publisher:{
            type: String,
            required: true,
        },description:{
            type: String,
            required: true,
        },authorId:{
            type: String,
            required: true,
        }   
 }
)
module.exports = mongoose.model('Books',BookSchema);