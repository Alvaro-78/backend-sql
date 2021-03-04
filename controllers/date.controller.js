const {Date} = require('../models');

class DateController {

  async indexAll() {
    return Date.findAll();
  };

  async findById(id) {
    return Date.findOne({where:{id}});
  };

};


let dateController = new DateController();

module.exports = dateController;
