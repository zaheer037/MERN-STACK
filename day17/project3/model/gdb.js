const mongoose1=require('mongoose')
const Schema1=mongoose1.Schema
const passportLocalMongoose=require('passport-local-mongoose');
var groominfo=new Schema1({username:{type:String},password:{type:String},dob:{type:Date},email:{type:String},age:{type:Number}})
groominfo.plugin(passportLocalMongoose);
module.exports=mongoose1.model('groomtable',groominfo)