const express = require("express");
const ownersModel = require("../models/owners-model");
const { adminAccess } = require("../controllers/adminController");
const onlyAdmin = require("../middlewares/onlyAdmin");

const router = express.Router();

router.get("/", async function(req, res) {
     // res.send("owners router")
     let owners = await ownersModel.find()
     if(owners.length > 0) {
          return res.send("onwer already exists")
     }

     let {fullname, email, password} = req.body;
     let createdOwner = await ownersModel.create({
            fullname,
            email,
            password
     })

     res.send(createdOwner)
})

router.post("/admin", onlyAdmin, adminAccess)



module.exports = router;