'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Dentists', [
      {
        name: 'Dr. Rodolfo',
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

  }
};
