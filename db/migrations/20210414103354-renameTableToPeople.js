"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable("Persons", "People");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameTable("People", "Persons");
  },
};
