var mongoose = require('mongoose') ;

var userProfileSchema = mongoose.Schema({
        userName:{
            type:String ,
            required:true ,
        } ,
        userEmailAddress : {
            type:String ,
            required:true , 
        } ,
        userPassword : {
            type:String ,
            required:true ,
        } ,
        userAge : {
            type:String ,
            required:true 
        } ,
        userAreaofInterest : {
            type:String ,
            required:false
        }
})


if(mongoose.models['users']){
     return mongoose.model('users') ;
}

var users = mongoose.model('users',userProfileSchema) ;

module.exports = users ;

