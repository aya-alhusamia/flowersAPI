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
    const nweProduct = await Product.create(req.body);
    res.status(201).json(nweProduct);
  } catch (error) {
    next(error);
  }
};

exports.deletProduct = async (req, res, next) => {
  try {
    console.log(req.body.ids);
    // const findProducts = await Product.findAll({
    //   where: {
    //     id: {
    //       [Sequelize.Op.in]: req.body.ids.split(","),
    //     },
    //   },
    // });
    // await Product.destroy({ where: { id: req.body.ids.split(",") } });

    await req.product.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
exports.updateProducts = async (req, res, next) => {
  // try {
  //   const findProducts = await Product.findByPk(req.params.id);
  //   if (findProducts) {
  //     findProducts.update(req.body);
  //     res.status(201).end();
  //   } else {
  //     res.status(404).end();
  //   }
  // } catch (error) {
  //   res.status(500).json({ message: error.message ?? "Server Error" });
  // }
  try {
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
