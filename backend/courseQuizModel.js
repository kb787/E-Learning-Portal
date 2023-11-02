var mongoose = require('mongoose') ;

var quizSchema  = mongoose.Schema({
     courseDomain : {
        type:String ,
     } ,

     courseQuizQuestions : {
        type:Array ,
     } ,

     courseQuizOptions : {
        type:Array ,
     }
       ,

     courseQuizAnswers : {
        type:String ,  
     } , 
})

if(mongoose.models['quizData']){
    return mongoose.model('quizData') ;
}   

var quizData = mongoose.model('quizData',quizSchema) ;
module.exports = quizData ; 