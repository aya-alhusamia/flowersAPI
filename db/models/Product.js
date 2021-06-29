const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
      validateValue: {
        min: 1,
        max: 100,
      },
    },
    description: {
      type: DataTypes.STRING,
    },
  });
  SequelizeSlugify.slugifyModel(Product, {
    source: ["name"],
  });
  //Relations
  Product.associate = (models) => {
    models.Shop.hasMany(Product, {
      foreignKey: "shopId",
      as: "products",
      allowNull: false,
    });
    Product.belongsTo(models.Shop, { foreignKey: "shopId" });
  };
  return Product;
};
