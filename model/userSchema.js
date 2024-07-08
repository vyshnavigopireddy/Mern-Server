/*const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    _id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },email:{
        type:String,
        required:true,
    },password:{
        type:String,
        required:true,
    }
}) //convert this into A MONGOOSE schema 
module.exports= mongoose.model('User',userSchema)

//mongodb schema/model/
const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}})
    module.exports= mongoose.model('User',userSchema)*/



    const mongoose=require('mongoose');
    const userSchema=mongoose.Schema({
        name:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true}})
        module.exports= mongoose.model('User',userSchema)