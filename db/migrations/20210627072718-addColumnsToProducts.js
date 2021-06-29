"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("Products", "name", Sequelize.STRING, {
      allowNull: false,
    });
    queryInterface.addColumn("Products", "slug", Sequelize.STRING, {
      allowNull: false,
    });
    queryInterface.addColumn("Products", "price", Sequelize.INTEGER, {
      defaultValue: 2,
    });
    queryInterface.addColumn("Products", "description", Sequelize.STRING, {});
    queryInterface.addColumn("Products", "image", Sequelize.STRING, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Products", "name");
    await queryInterface.removeColumn("Products", "slug");
    await queryInterface.removeColumn("Products", "price");
    await queryInterface.removeColumn("Products", "description");
    await queryInterface.removeColumn("Products", "image");
  },
};
