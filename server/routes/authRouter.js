const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authControllers.js");

//SignUp Route
//POST Request

//What are all the controllers for signup:
//req.body has {email, password}.
//1: create User
//2: setSSIDCookie
  //Eelan's suggestion: 
  //set a ssid cookie in the browser expires after x hours. store that ssid in the database (never expires). 


authRouter.post("/signup", authController.createUser, authController.setSSIDCookie, (req, res) => {
  res.status(200).json(res.locals.loginInfo);
});

//Login Route
//POST Request

//What is the middleware we should use when a user tries to login? 
//User has sent username and password. 
//1. First middleware is verifying the user. 
  //match the email and password input with what is in storage. 
  //if matches, go to the next middleware. 
//2. Create a session (re-use the middleware we wrote already)
//3. Return an object with email and userId. 


authRouter.post("/login", authController.verifyUser, authController.setSSIDCookie, (req, res) => {
  //what to send if successful?
  res.status(200).json(res.locals.loginInfo); //contains {email, userId}
});

module.exports = authRouter;
