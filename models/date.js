'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Date extends Model {
   
    static associate(models) {
      this.belongsTo(models.Customer, {
        foreignKey: 'customerID'

      });
      this.belongsTo(models.Dentist, {
        foreignKey: 'dentistID'
      });
    };
  };

  Date.init({
    dentalAppointment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Date',
  });
  return Date;
};