'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Dates',[
      {
        dentalAppointment: "10/03/2021",
        customerID: 1,
        dentistID: 1,
        createdAt: new Date,
        updatedAt: new Date
      }
    ], {});

  },
  

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
