const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authControllers.js");

//SignUp Route
//POST Request

//What are all the controllers for signup:
//req.body has {email, password}.
//1: create User
//2: setSSIDCookie
//3: startSession

authRouter.post("/signup", authController.createUser, (req, res) => {
  res.status(200).json(res.locals.loginInfo);
});

//Login Route
//POST Request
authRouter.post("/login", (req, res) => {
  //what to send if successful?
  res.status(200).json(res.locals.loginInfo); //contains {email, userId}
});

module.exports = authRouter;
