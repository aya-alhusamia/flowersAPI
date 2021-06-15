const express = require("express");
let products = require("./data");
const app = express();
app.use(express.json());
//  Create products route
app.post("/products", (req, res) => {
  req.body.id = products[products.length - 1].id + 1;
  products.push(req.body);
  res.status(201).json(req.body);
});

//Delete products route
app.delete("/products/:productID", (req, res) => {
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
});

//Update products route
app.put("/products/:productID", (req, res) => {
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
});

// Pruduct list
app.get("/products", (req, res) => {
  console.log(products);
  res.json(products);
});

// Delaile of products
app.get("/products/:productID", (req, res) => {
  const findProduct = products.find(
    (product) => product.id === +req.params.productID
  );
  if (findProduct) {
    res.json(findProduct);
  } else {
    res.status(404).end();
  }
});

const PORT = 8000;
app.listen(PORT, () => console.log(`${PORT}`));
