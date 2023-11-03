var mongoose  = require('mongoose') ;

var courseDetailSchema = mongoose.Schema({

       courseDomain : {
          type:String ,
       } ,       

       courseHeading : {
          type:String ,
       } ,

       courseParagraph : {
         type : String , 
       } ,

       courseVideoLink:{
         type:String ,
      }  ,
})

if(mongoose.models['coursedetails']){
     return mongoose.model('coursedetails') ;
}

var courseDetails = mongoose.model('coursedetails',courseDetailSchema) ;

module.exports = courseDetails ;