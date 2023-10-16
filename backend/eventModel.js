var mongoose = require('mongoose') ;

var eventSchema = mongoose.Schema(
    {
        eventTitle : {
            type:String ,
            required:true ,
        } ,

        eventDescription : {
            type:String ,
            required:true ,
        } , 

        eventVenue : {
            type:String ,
            required:true , 
        } ,

        eventTimings : {
            type:String ,
            required:true ,
        }
    }
)

if(mongoose.models['eventsData']) {
   return mongoose.model('eventsData') ;
} 

var eventsData = mongoose.model('eventsData',eventSchema) ;

module.exports = eventsData ;