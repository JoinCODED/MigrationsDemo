"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Persons", "createdAt", Sequelize.DATE, {
      defaultValue: Date.now(),
    });
    await queryInterface.addColumn("Persons", "updatedAt", Sequelize.DATE, {
      defaultValue: Date.now(),
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Persons", "createdAt");
    await queryInterface.removeColumn("Persons", "updatedAt");
  },
};
