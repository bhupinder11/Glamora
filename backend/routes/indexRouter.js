const express = require("express");
const router = express.Router();

const productModel = require("../models/product-model")

router.get("/shop",async function(req, res) {
    try {
        let products =  await productModel.find();
        // console.log(products.image)
        res.json({products})
    } catch (error) {
        res.json({errorInfetching: true})
    }
   
})

module.exports = router