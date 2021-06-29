const express = require("express");
const productControler = require("../controllers/productController");
const router = express.Router();
const multer = require("multer");
router.param("productID", async (req, res, next, productID) => {
  const findProducts = await productControler.fetchProduct(productID, next);
  if (findProducts) {
    req.product = findProducts;
    next();
  } else {
    next({ message: "Product not found ", status: 404 });
  }
});

const storage = multer.diskStorage({
  destination: "./media",
  filename: (req, file, cb) => {
    cb(null, `${+new Date()}${file.originalname}`);
  },
});

const upload = multer({
  storage,
});

// //  Create products route
// router.post("/", upload.single("image"), productControler.createProduct);

//Delete products route
router.delete("/:productID", productControler.deletProduct);

//Update products route
router.put(
  "/:productID",
  upload.single("image"),
  productControler.updateProducts
);

// Pruduct list
router.get("/", productControler.pruductList);

// Delaile of products
router.get("/:productID", productControler.delaileProduct);

module.exports = router;
