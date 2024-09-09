const express = require("express");
const router = express.Router();

const productModel = require("../models/product-model");

router.get("/shop", async function (req, res) {
  // try {
  //     let products =  await productModel.find();
  //     // console.log(products.image)
  //     res.json({products})
  // } catch (error) {
  //     res.json({errorInfetching: true})
  // }

  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    let startIndex = (page - 1) * limit;

    // let indexing = await productModel.createIndexes({ _id: 1 });

    // let products = await productModel.find();
    let products = await productModel
    .find()
    .sort({ _id: 1 })  // Sorting by indexed _id
    .skip(startIndex)
    .limit(limit);
    //  res.json({running: true})
    const totalProducts = await productModel.countDocuments();
    totalPages = Math.ceil(totalProducts / limit);

    // res.json({ products, totalPages, page, limit });
    res.json({ products, totalPages });
  } catch (error) {
    res.json({ errorInfetching: true });
  }
});

module.exports = router;
