'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Date extends Model {
   
    static associate(models) {
      this.belongsTo( models.customerID )
      this.belongsTo( models.dentistID )
    }
  };
  Date.init({
    dentistID: DataTypes.INTEGER,
    customerID: DataTypes.INTEGER,
    dentalAppointment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Date',
  });
  return Date;
};