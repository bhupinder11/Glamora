const express = require("express");

const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-model");
const fs = require("fs")

router.get("/", function (req, res) {
  res.send("products router");
});

router.post("/createproduct", upload.single("image"),async function (req, res) {
  // res.send("products router")
  //    console.log(req.file.buffer)
  // console.log(req.body.inputData)
  try {
      // let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body.inputData;
      // let { name} = req.body.inputData;
            const savedData = new productModel({
               image: {
                  data: fs.readFileSync("uploads/" + req.file.filename),
                  contentType: "image/png"
               },
               name : req.body.inputData.name,
               price: req.body.inputData.price,
               discount: req.body.inputData.discount,
               bgcolor: req.body.inputData.bgcolor,
               panelcolor: req.body.inputData.panelcolor,
               textcolor: req.body.inputData.textcolor
            })
            savedData.save();
     //   let product = await productModel.create({
   //      image: req.file.buffer,
   //      name,
   //      price,
   //      discount,
   //      bgcolor,
   //      panelcolor,
   //      textcolor
   //   })
   //   res.json({productcreated: true, product})
   res.send("image is saved")
  } catch (error) {
   //   res.json({errorcreatingproduct: true})
   res.send("error has been found")
   console.log(error)
  }
 
});





module.exports = router;
