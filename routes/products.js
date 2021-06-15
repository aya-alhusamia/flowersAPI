const express = require("express");
const productCintroler = require("../controllers/productCintroler");
const router = express.Router();

//  Create products route
router.post("/", productCintroler.createProduct);

//Delete products route
router.delete("/:productID", productCintroler.deletProduct);

//Update products route
router.put("/:productID", productCintroler.updateProducts);

// Pruduct list
router.get("/", productCintroler.pruductList);

// Delaile of products
router.get("/:productID", productCintroler.delaileProduct);

module.exports = router;
