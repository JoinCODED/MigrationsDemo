"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Bakeries", "personId", Sequelize.INTEGER, {
      key: "id",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Bakeries", "personId");
  },
};
