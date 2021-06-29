const express = require("express");
const shopController = require("../controllers/shopController");
const router = express.Router();
const multer = require("multer");
router.param("shopId", async (req, res, next, shopId) => {
  const findShops = await shopController.fetchShop(shopId, next);
  if (findShops) {
    req.shop = findShops;
    next();
  } else {
    next({ message: "Shop not found ", status: 404 });
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

//  Create shops route
router.post("/", upload.single("image"), shopController.createShop);

//  Create products route
router.post(
  "/:shopId/products",
  upload.single("image"),
  shopController.createProduct
);

//Delete products route
// router.delete("/:shopId", shopController.deletShop);

//Update products route
// router.put(
//   "/:shopId",
//   upload.single("image"),
//   shopController.updateShops
// );

// shop list
router.get("/", shopController.shopList);

module.exports = router;
