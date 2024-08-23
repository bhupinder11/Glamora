const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model")
const ownerModel = require("../models/owners-model")

const app = express();

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

module.exports = async function (req, res, next) {
  if (!req.body.token) {
    return res.json({ notLoggedIn: true });
  }

  try {
    let decoded = jwt.verify(req.body.token, process.env.JWT_KEY)
    // console.log(decoded)
    let user = await ownerModel.findOne({email: decoded.email}).select("-password")
    // console.log(user.email)
    req.email = user.email;
    next();
  } catch (error) {
    res.json({notAdmin: true})
  }
};
