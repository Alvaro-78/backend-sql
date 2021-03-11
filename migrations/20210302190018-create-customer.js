'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        require: true
      },
      lastName: {
        type: Sequelize.STRING,
        require: true
      },
      password: {
        type: Sequelize.STRING,
        unique: true,
        require: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        require: true,

      },
      phoneNumber: {
        type: Sequelize.STRING,
        require: true,
      },
      address: {
        type: Sequelize.STRING,
        require: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Customers');
  }
};