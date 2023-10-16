var userProfileModel = require('./userProfileModel');
var teacherVideoModel = require('./teacherVideoModel');
var eventModel = require('./eventModel');
var express = require('express');
const handleUserProfile = async (req, res) => {
    const { userName, userEmailAddress, userPassword, userAge, userAreaofInterest } = req.body;
    try {
        var newUser = await userProfileModel(
            {
                userName, userEmailAddress, userPassword, userAge, userAreaofInterest
            }
        )
        newUser.save();
        return res.status(200).send({ message: 'Successfully added the user', success: true, newUser });
    }
    catch (error) {
        return res.status(404).send({ message: 'Unable to add the user', success: false });
    }
}

const handleUserLogin = async (req, res) => {
    const { userEmailAddress, userPassword } = req.body;
    try {
        var prevUser = await userProfileModel.findOne({
            userEmailAddress: req.body.userEmailAddress
        })
        if (!prevUser) {
            return res.status(500).send({ message: 'Invalid email address', success: false });
        }
        else if (prevUser.userPassword !== req.body.userPassword) {
            return res.status(500).send({ message: 'Invalid password', success: false });
        }
        else {
            return res.status(201).send({ message: 'Login successfull', success: true });
        }
    }
    catch (error) {
        return res.status(500).send({ message: 'Bad request', success: false });
    }
}

const handleVideoPosting = async (req, res) => {
    const { courseTitle, courseDescription, courseUrl,courseCategory, courseSubCategory,coursRating } = req.body;
    try {
        var newVideo = await teacherVideoModel(
            {
                courseTitle, courseDescription, courseUrl, courseCategory, courseSubCategory,coursRating
            }
        )
        newVideo.save();
        return res.status(200).send({ message: 'Successfully added the video', success: true, newVideo });
    }
    catch (error) {
        return res.status(404).send({ message: 'Unable to add the video', success: false });
    }
}

const getAllVideoCourse = async (req, res) => {
    try {
      const allData = await teacherVideoModel.find();
      res.send(allData);
    } catch (error) {
      console.error("Error fetching all questions:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

const handleEventPosting = async (req, res) => {
    const { eventTitle, eventDescription, eventVenue, eventTimings } = req.body;
    try {
        var newVideo = await eventModel(
            {
                eventTitle, eventDescription, eventVenue, eventTimings
            }
        )
        newVideo.save();
        return res.status(200).send({ message: 'Successfully scheduled the event', success: true, newVideo });
    }
    catch (error) {
        return res.status(404).send({ message: 'Unable to do schedule the event', success: false });
    }
}

const getSearchTopic = async (req, res) => {
    try {
      const topic = req.params.topic;
      const searchResults = await teacherVideoModel.find(
        {
          "$or": [
            { 'courseCategory': { $regex: topic } }
          ]
        }
      )
      res.send(searchResults)
    }
  
    catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

const getSubtopic = async (req, res) => {
    try {
      const subtopic = req.params.subtopic;
      const searchResults = await teacherVideoModel.find(
        {
          "$or": [
            { 'courseSubCategory': { $regex: subtopic } }
          ]
        }
      )
      res.send(searchResults)
    }
  
    catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }


const handleAdminLogin = async (req, res) => {
    const { userEmailAddress, userPassword } = req.body;
    const adminEmailAddress = 'admin243@gmail.com';
    const adminPassword = 'admin243';
    try {
        if (req.body.userEmailAddress !== adminEmailAddress) {
            return res.status(500).send({ message: 'Invalid credentials', success: false });
        }
        else if ((req.body.userEmailAddress === adminEmailAddress) && (req.body.userPassword !== adminPassword)) {
            return res.status(500).send({ message: 'Invalid credentials', success: false });
        }
        else {
            return res.status(200).send({ message: 'Login successfull', success: true });
        }
    }
    catch (error) {
        return res.status(404).send({ message: 'Bad request', success: false });
    }
}

const getEventInfo = async (req, res) => {
  try {
    const allData = await eventModel.find();
    res.send(allData);
  } catch (error) {
    console.error("Error fetching all questions:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


var userProfileRouter = express.Router();
var userLoginRouter = express.Router();
var videoPostingRouter = express.Router();
var eventPostingRouter = express.Router();
var adminLoginRouter = express.Router();
var videoGetRouter = express.Router() ;
var searchRouter = express.Router()
var subtopicRouter = express.Router()
var eventRouter = express.Router()

userProfileRouter.post('/postUserProfile', handleUserProfile);
userLoginRouter.post('/postUserLogin', handleUserLogin);
videoPostingRouter.post('/postNewVideo', handleVideoPosting);
eventPostingRouter.post('/postNewEvent', handleEventPosting);
adminLoginRouter.post('/postAdminLogin', handleAdminLogin);
videoGetRouter.get('/getAllVideos', getAllVideoCourse)
searchRouter.get('/search/:topic' ,getSearchTopic)
subtopicRouter.get('/filter/:subtopic' ,getSubtopic)
eventRouter.get('/event/getAllevent' , getEventInfo)

module.exports = { userProfileRouter, userLoginRouter,subtopicRouter , eventRouter ,videoPostingRouter, videoGetRouter ,searchRouter ,   eventPostingRouter, adminLoginRouter };
