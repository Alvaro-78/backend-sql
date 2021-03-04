const {Dentist} = require('../models');

class DentistController {

  async indexAll() {
    return Dentist.findAll();
  };

  async findById(id) {
    return Dentist.findOne({where:{id}});
  };

};


let dentistController = new DentistController();

module.exports = dentistController;
