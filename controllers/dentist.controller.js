const {Dentist} = require('../models');

class DentistController {

  // FIND ALL DENTISTS
  async indexAll(dentist) {
    return Dentist.findAll(dentist);
  };

  // FIND DENTIST BY ID
  async findDentist(id) {
    return Dentist.findOne({where:{id}});
  };

  // CREATE DENTIST
  async createDentist(dentist) {
    let customerExist = customer.create()
    if(customerExist) {
      return;
    };
    return Dentist.create(dentist)
  };

  // UPDATE DENTIST
  async updateDentist(dentist,id) {
    return Dentist.update(dentist,{where:{id}})
  };

  // DELETE DENTIST
  async deleteDentist(id){
    return Dentist.destroy({where:{id}})
  };

};


let dentistController = new DentistController();

module.exports = dentistController;
