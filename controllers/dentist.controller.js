const {Dentist} = require('../models');

class DentistController {

  // FIND ALL DENTISTS
  async indexAll() {
    return Dentist.findAll();
  };

  // FIND DENTIST BY ID
  async findById(id) {
    return Dentist.findOne({where:{id}});
  };

  // CREATE DENTIST
  async createDentist(dentist) {
    return Dentist.create(dentist)
  };

  // UPDATE DENTIST
  async updateDentist(id) {
    return Dentist.updateById({where:{id}})
  };

  // DELETE DENTIST
  async deleteDentist(id){
    return Dentist.deleteById({where:{id}})
  };

};


let dentistController = new DentistController();

module.exports = dentistController;
