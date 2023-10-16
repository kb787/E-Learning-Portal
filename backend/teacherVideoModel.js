var mongoose = require('mongoose') ;

var videoSchema = mongoose.Schema(
    {
        courseTitle : {
            type:String ,
        } ,

        courseDescription : {
            type:String ,
        } ,
        courseUrl : {
            type:String ,
        },
        courseCategory:{
            type:String,
        },
        courseSubCategory:{
            type:String,
        },
        coursRating:{
            type:String,
        }
    }
)

if(mongoose.models['videosData']){
     return mongoose.model('videosData') ;
}

var videosData = mongoose.model('videosData',videoSchema) ;
module.exports = videosData ; 
