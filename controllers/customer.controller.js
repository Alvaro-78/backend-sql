const {Customer} = require('../models');


class CustomerController {

  // Find All Customers
  async indexAll(customer) {
    return Customer.findAll(customer);
  };

  // Find by CustomerId
  async findById(id) {
    return Customer.findOne({where:{id}});
  };

  // Create Customer
  async createCustomer(customer) {
    return Customer.create(customer)
  };

  // Update Customer
  async updateCustomer(id) {
    return Customer.updateById({where:{id}})
  };

  // Delete Customer
  async deleteCustomer(id) {
    return Customer.deleteCustomer({where:{id}})
  };
};


let customerController = new CustomerController();

module.exports = customerController;