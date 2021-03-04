'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dentist extends Model {
   
    static associate(models) {
      this.hasMany( models.Date,{
        foreignKey: "dentistID"
      });
    }
  };
  Dentist.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dentist',
  });
  return Dentist;
};