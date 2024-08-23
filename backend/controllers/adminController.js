const express = require('express');
const cookieParser = require('cookie-parser');
const ownerModel = require("../models/owners-model")

const app = express();

// Use cookie-parser middleware
app.use(cookieParser());

module.exports.adminAccess =async function (req, res) {
    let email = req.email;
    // console.log(email)
    try {
        // console.log("admin")
        let admin = await ownerModel.findOne({email}).select("-password")
        // console.log(admin)
        if(admin.email == "bhupinder@gmail.com"){
            res.json({isAdmin: true, admin})
        }
        
    } catch (error) {
        res.json({notAdmin: true})
    }
}