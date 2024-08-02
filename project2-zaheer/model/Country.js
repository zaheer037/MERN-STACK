//database schema

const mongoose=require('mongoose')
const Schema=mongoose.Schema //creating schema
const passportLocalMongoose=require('passport-local-mongoose');
var Country =  new Schema({
    cid:{
        type:Number
    },
    cname:{
        type:String
    },
    cAddres:{
        type:String
    },
    password:{
        type:String
    }
})

Country.plugin(passportLocalMongoose);
module.exports=mongoose.model('Country',Country)