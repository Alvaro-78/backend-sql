'use strict';
const {
  Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dentist extends Model {
   
    static associate(models) {
      this.hasMany( models.Appointment,{
        foreignKey: "dentistId"
      });
    }
  };
  Dentist.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dentist',
  });
  return Dentist;
};