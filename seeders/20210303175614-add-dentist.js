'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Dentists', [
      {
        name: 'Doc.LaMuela',
        password: '1234',
        createdAt: new Date,
        updatedAt: new Date
      },
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

  }
};
