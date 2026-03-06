const express = require("express");
const router = express.Router();
const Review = require("../models/Review");
const Product = require("../models/Product");
const {isLoggedIn} = require("../middleware")

router.post("/products/:productid/review", isLoggedIn, async (req, res) => {
  const { productid } = req.params;
  const { rating, comment } = req.body;

  // Debug incoming data
  console.log("Review route hit");
  console.log("params:", req.params);
  console.log("body:", req.body);
  console.log("parsed rating/comment:", { rating, comment });

  const product = await Product.findById(productid);
  const review = await Review.create({ rating, comment });

  // Debug DB objects
  console.log("product found:", product?._id);
  console.log("review created:", review);

  product.reviews.push(review);
  await product.save();

  console.log("product after save:", product);

  req.flash("success", " review added!");
  res.redirect(`/products/${productid}`);
});


module.exports = router