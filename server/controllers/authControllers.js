const priceTrackerDB = require("../models/priceTrackerModel.js");
const bcrypt = require("bcryptjs");

const authController = {};

//Signup Controller- POST Request:
authController.createUser = async (req, res, next) => {
  if (req.body.email.length > 0 && req.body.password.length > 0) {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    let queryString = `
    INSERT INTO users ( email, password) VALUES ($1, $2) RETURNING *
    `; 
    let values = [req.body.email, hashedPassword];

    priceTrackerDB
      .query(queryString, values)
      .then((data) => {
        res.locals.loginInfo = {};
        res.locals.loginInfo.userId = data.rows[0]._id;
        res.locals.loginInfo.email = req.body.email;
        return next();
      })
      .catch((err) => {
        console.log(err);
        return next(err);
      });
  } else {
    console.log("password or username rejected");
    return res.status(418).json({ error: "invalid email or password" });
  }
};

//SSIDCookie Controller:
authController.setSSIDCookie = (req, res, next) => {
  //First, set cookie on the client to a random number:
  let randomNumber = Math.floor(Math.random() * 1000000);
  let options = { maxAge: 90000000, httpOnly: true };

  res.cookie("ssid", randomNumber, options);

  //second, save the ssid into the database.
  let queryString = `
  INSERT INTO sessions ( user_id, ssid) VALUES ($1, $2) RETURNING *
  `; 
  let values = [res.locals.loginInfo.userId, randomNumber];

  priceTrackerDB
    .query(queryString, values)
    .then((data) => {
      return next();
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });

  return next();
};

//Login Controller - POST Request:
authController.verifyUser = (req, res, next) => {

  let queryString = `
    SELECT * FROM users WHERE email=$1
    `; 
  let values = [req.body.email];

  priceTrackerDB
    .query(queryString, values)
    .then((data) => {
      if (data.rows.length > 0) {
        bcrypt
          .compare(req.body.password, data.rows[0].password)
          .then((isMatch) => {
            if (isMatch) {
              res.locals.loginInfo = {};
              res.locals.loginInfo.userId = data.rows[0]._id;
              res.locals.loginInfo.email = req.body.email;
              return next();
            } else {
              return res.status(400).json({ error: "invalid password" });
            }
          });
      } else {
        console.log("invalid email or password");
        return res.status(200).json({ error: "invalid email or password" });
      }
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
};

module.exports = authController;
