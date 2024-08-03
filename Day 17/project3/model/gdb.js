
const mongoose=require('mongoose')
const Schema=mongoose.Schema //creating schema
const passportLocalMongoose=require('passport-local-mongoose');
var groominfo =  new Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    dob:{
        type:Date
    },
    email:{
        type:String
    },
    age:{
        type:Number
    }
})

groominfo.plugin(passportLocalMongoose);
module.exports=mongoose.model('groomtable',groominfo)