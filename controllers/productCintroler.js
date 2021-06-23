const { Product } = require("../db/models");

exports.fetchProduct = async (productID, next) => {
  try {
    const product = await Product.findByPk(productID);
    return product;
  } catch (error) {
    next(error);
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    const nweProduct = await Product.create(req.body);
    res.status(201).json(nweProduct);
  } catch (error) {
    next(error);
  }
};

exports.deletProduct = async (req, res, next) => {
  try {
    await req.product.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
exports.updateProducts = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    await req.product.update(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
exports.pruductList = async (req, res, next) => {
  try {
    const products = await Product.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.json(products);
  } catch (error) {
    next(error);
  }
};
exports.delaileProduct = async (req, res) => {
  // try {
  //   const findProducts = await Product.findByPk(req.params.productID);
  //   if (findProducts) {
  //     res.json(findProducts);
  //   } else {
  //     res.status(404).end();
  //   }
  // } catch (error) {
  //   res.status(500).json({ message: error.message ?? "Server Error" });
  // }
  res.json(req.product);
};
