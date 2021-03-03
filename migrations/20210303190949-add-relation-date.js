'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

  return [queryInterface.addColumn(
    'Dates', // name of Source model
    'customerID', // name of the key we're adding 
    {
        type: Sequelize.INTEGER,
        references: {
            model: 'Customers', // name of Target model
            key: 'id' // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }),
      queryInterface.addColumn(
        'Dates', // name of Source model
        'dentistID', // name of the key we're adding 
        {
            type: Sequelize.INTEGER,
            references: {
                model: 'Dentists', // name of Target model
                key: 'id' // key in Target model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
          }),
    ];
 
  },

  down: async (queryInterface, Sequelize) => {

  }
};
