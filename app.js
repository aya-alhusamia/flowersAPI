const express = require("express");
const db = require("./db/models");
const productRouter = require("./routes/products");
const app = express();
app.use(express.json());
app.use("/products", productRouter);
db.sequelize.sync();
app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
  next();
});

app.use((err, req, res, next) => {
  res
    .status(err.status ?? 500)
    .json({ message: err.message ?? "Intrenal Server Error" });
});
const PORT = 8000;

app.listen(PORT, () => console.log(`${PORT}`));
