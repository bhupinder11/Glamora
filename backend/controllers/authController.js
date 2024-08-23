const bcrypt = require("bcrypt");
const userModel = require("../models/user-model");
const jwt = require("jsonwebtoken");

module.exports.registerUser = async function (req, res) {
  //  res.send("register user route")
  try {
    let { fullname, email, password } = req.body;

    let user = await userModel.findOne({ email });
    if (user) {
      return res.json({
        alreadyregistered: true,
      });
    }

    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) return res.send(err.message);
        let createdUser = await userModel.create({
          email,
          fullname,
          password: hash,
        });

        // res.send(createdUser);
        let token = jwt.sign(
          { email, id: createdUser._id },
          process.env.JWT_KEY
        );
        res.json({
          token,
          user: createdUser,
          success: true,
        });
      });
    });
  } catch (error) {
    // res.status(500).send("Unexpected error in try-catch");
    res.json({});
  }
};

module.exports.loginUser = async function (req, res) {
  try {
    let { email, password } = req.body;

    let user = await userModel.findOne({ email });
    if (!user) return  res.json({ userNotfound: true });
   

    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        let token = jwt.sign({ email, id: user._id }, process.env.JWT_KEY);
        res.json({
          success: true,
          token,
          loginuser: user,
        });
        // res.send(token)
        // res.send("user logged in")
      } else {
        res.json({
          mismatched: true,
        });
        // res.send("password does'nt match")
      }
    });
  } catch (error) {
    res.json({});
  }
};
