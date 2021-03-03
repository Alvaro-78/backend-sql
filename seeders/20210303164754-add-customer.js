'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Customers', [
    {
      firstName: "Marianico",
      lastName:  "ElCorto",
      email: "marianico@elcorto.com",
      phoneNumber: "+34 58741258963",
      address: "C/ sin nombre 33",
      createdAt: new Date,
      updatedAt: new Date
    }
  ], {});
 
  },

  down: async (queryInterface, Sequelize) => {

  }
};
