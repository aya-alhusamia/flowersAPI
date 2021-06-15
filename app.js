const express = require("express");
const products = require("./data");
const app = express();

app.get("/products", (req, res) => {
  console.log(products);
  res.json(products);
});
const PORT = 8000;
app.listen(PORT, () => console.log(`${PORT}`));
