const {Customer} = require('../models');


class CustomerController {

  async indexAll() {
    return Customer.findAll();
  };

  async findById(id) {
    return Customer.findOne({where:{id}});
  };

};


let customerController = new CustomerController();

module.exports = customerController;