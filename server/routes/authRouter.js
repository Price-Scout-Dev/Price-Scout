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






authRouter.post("/login", (req, res) => {
  //what to send if successful?
  res.status(200).json(res.locals.loginInfo); //contains {email, userId}
});

module.exports = authRouter;
