const express = require("express");
const productControler = require("../controllers/productCintroler");
const router = express.Router();

router.param("productID", async (req, res, next, productID) => {
  const findProducts = await productControler.fetchProduct(productID, next);
  if (findProducts) {
    req.product = findProducts;
    next();
  } else {
    next({ message: "Product not found ", status: 404 });
  }
});

//  Create products route
router.post("/", productControler.createProduct);

//Delete products route
router.delete("/:productID", productControler.deletProduct);

//Update products route
router.put("/:productID", productControler.updateProducts);

// Pruduct list
router.get("/", productControler.pruductList);

// Delaile of products
router.get("/:productID", productControler.delaileProduct);

module.exports = router;
