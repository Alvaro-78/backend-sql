'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Appointments',[
      {
        dentalAppointment: "10/03/2021",
        customerId: 1,
        dentistId: 1,
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
