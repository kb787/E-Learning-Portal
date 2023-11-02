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

if(mongoose.models['courseDetails']){
     return mongoose.model('courseDetails') ;
}

var courseDetails = mongoose.model('courseDetails',courseDetailSchema) ;

module.exports = courseDetails ;