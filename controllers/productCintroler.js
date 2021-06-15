let products = require("../data");

exports.createProduct = (req, res) => {
  req.body.id = products[products.length - 1].id + 1;
  products.push(req.body);
  res.status(201).json(req.body);
};

exports.deletProduct = (req, res) => {
  const findProduct = products.find(
    (product) => product.id === +req.params.productID
  );
  if (findProduct) {
    products = products.filter(
      (product) => product.id !== +req.params.productID
    );
    res.status(204).end();
  } else {
    res.status(404).end();
  }
};
exports.updateProducts = (req, res) => {
  const findProduct = products.find(
    (product) => product.id === +req.params.productID
  );
  if (findProduct) {
    products = products.filter((product) =>
      product.id === product.id ? req.body : product
    );
    res.status(201).end();
  } else {
    res.status(404).end();
  }
};
exports.pruductList = (req, res) => {
  console.log(products);
  res.json(products);
};
exports.delaileProduct = (req, res) => {
  const findProduct = products.find(
    (product) => product.id === +req.params.productID
  );
  if (findProduct) {
    res.json(findProduct);
  } else {
    res.status(404).end();
  }
};
