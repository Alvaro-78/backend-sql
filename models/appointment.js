'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
   
    static associate(models) {
      this.belongsTo(models.Customer, {
        foreignKey: 'customerId'

      });
      this.belongsTo(models.Dentist, {
        foreignKey: 'dentistId'
      });
    };
  };

  Appointment.init({
    dentalAppointment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};