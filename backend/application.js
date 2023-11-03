var express = require('express') ;
var app = express() ;
var cors = require('cors') ;
var http = require('http') ;
var server = http.createServer(app) ;
var Connect = require('./configure') ;
const {userProfileRouter,userLoginRouter,videoPostingRouter,subtopicRouter,eventRouter,searchRouter,eventPostingRouter,adminLoginRouter,videoGetRouter,courseDetailRouter,courseQuizRouter,allCourseDetailRouter} = require('./controller') ;

var corsOptions = {
    origin : "http://localhost:3000" ,
}

app.use(express.json()) ;
app.use(cors(corsOptions)) ;

app.use("/v1/api/users",userProfileRouter) ;
app.use("/v2/api/users",userLoginRouter) ;
app.use("/v3/api/videosData",videoPostingRouter) ;
app.use("/v4/api/eventsData",eventPostingRouter) ;
app.use("/v5/api/users",adminLoginRouter) ;
app.use("/v6/api/videosData",videoGetRouter) ;
app.use("/v8/api/coursedetails",courseDetailRouter) ;
app.use("/v9/api/quizData",courseQuizRouter) ;
app.use("/v10/api/coursedetails",allCourseDetailRouter) ;
app.use("/v6/api/",searchRouter) ;
app.use("/v7/api/",subtopicRouter) ;
app.use("/v7/api/",eventRouter) ;


Connect() ;
app.get("/", (req,res) => {
    res.send(" Your application is running ") ;
})

server.listen(3500, () => {
    console.log(" App launched sucessfully ") ;
})

