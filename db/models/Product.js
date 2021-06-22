module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
};
