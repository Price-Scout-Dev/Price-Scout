const priceTrackerDB = require("../models/priceTrackerModel.js");
const bcrypt = require("bcryptjs");

const authController = {};

//Create User Controller:
authController.createUser = (req, res, next) => {
  if (req.body.email.length > 0 && req.body.password.length > 0) {
    //create query string. insert user into the user table.
    let queryString = `
    INSERT INTO users ( hashedPassword, email) VALUES ($1, $2) RETURNING *
    `; // parameterized sql query
    let values = [req.body.password, req.body.email];

    priceTrackerDB
      .query(queryString, values)
      .then((data) => {
        // console.log(data);
        res.locals.loginInfo = {};
        res.locals.loginInfo.userId = data.rows[0].userid;
        res.locals.loginInfo.email = req.body.email;
        return next();
      })
      .catch((err) => {
        console.log(err);
        return next(err);
      });
  } else {
    console.log("password or username rejected");
    next("invalid username or password");
  }
};

//Cookie Controller:
authController.setSSIDCookie = (req, res, next) => {
  //First, set cookie on the client to a random number
  let randomNumber = Math.floor(Math.random() * 1000000);
  let options = { maxAge: 90000000, httpOnly: true };

  res.cookie("ssid", randomNumber, options);

  //second, save the ssid into the database.

  let queryString = `
  INSERT INTO sessions ( userId, ssid) VALUES ($1, $2) RETURNING *
  `; // parameterized sql query
  let values = [res.locals.loginInfo.userId, randomNumber];

  priceTrackerDB
    .query(queryString, values)
    .then((data) => {
      console.log("Session added: ", data);
      return next();
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });

  return next();
};

module.exports = authController;
