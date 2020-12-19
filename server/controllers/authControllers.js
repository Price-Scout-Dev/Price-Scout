const priceTrackerDB = require("../models/priceTrackerModel.js");
const bcrypt = require("bcryptjs");

const authController = {};

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
        res.locals.loginInfo = {}
        res.locals.loginInfo.userid = data.rows[0].userid;
        res.locals.loginInfo.email = req.body.email
        return next();
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  } else {
    console.log("password or username rejected");
    next("invalid username or password");
  }
};



module.exports = authController;
