const { Shop, Product } = require("../db/models");

exports.fetchShop = async (shopId, next) => {
  try {
    const shop = await Shop.findByPk(shopId);
    return shop;
  } catch (error) {
    next(error);
  }
};

exports.createShop = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    const newShop = await Shop.create(req.body);
    res.status(201).json(newShop);
  } catch (error) {
    next(error);
  }
};

// exports.deletShop = async (req, res, next) => {
//   try {
//     await req.shop.destroy();
//     res.status(204).end();
//   } catch (error) {
//     next(error);
//   }
// };
// exports.updateShops = async (req, res, next) => {
//   try {
//     if (req.file) {
//       req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
//     }
//     await req.shop.update(req.body);
//     res.status(204).end();
//   } catch (error) {
//     next(error);
//   }
// };
exports.shopList = async (req, res, next) => {
  try {
    const shops = await Shop.findAll({
      attributes: ["id", "name"],
      include: {
        model: Product,
        as: "products",
        attributes: ["id"],
      },
    });
    res.json(shops);
  } catch (error) {
    next(error);
  }
};
exports.createProduct = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    req.body.shopId = req.shop.id;
    const nweProduct = await Product.create(req.body);
    res.status(201).json(nweProduct);
  } catch (error) {
    next(error);
  }
};
// exports.delaileShop = async (req, res) => {
//   // try {
//   //   const findProducts = await Shop.findByPk(req.params.productID);
//   //   if (findProducts) {
//   //     res.json(findProducts);
//   //   } else {
//   //     res.status(404).end();
//   //   }
//   // } catch (error) {
//   //   res.status(500).json({ message: error.message ?? "Server Error" });
//   // }
//   res.json(req.shop);
// };
