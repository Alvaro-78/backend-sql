const {Date} = require('../models');

class DateController {

  async indexAll() {
    return Date.findAll();
  };

  async findById(id) {
    return Date.findOne({where:{id}});
  };

  async findById(id) {
    return Date.findOne({where:{id}});
  };

  async findByCustomerId(customerID) {
    return Date.find({where:{customerID}});
  };

  async findByDentistId(dentistID) {
    return Date.find({where:{dentistID}});
  };

};


let dateController = new DateController();

module.exports = dateController;
