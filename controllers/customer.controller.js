const {Customer} = require('../models');


class CustomerController {

  // Find All Customers
  async indexAll(customer) {
    return Customer.findAll(customer);
  };

  // Find by CustomerId
  async findCustomer(id) {
    return Customer.findOne({where:{id}});
  };

  // Create Customer
  async createCustomer(customer) {
    return Customer.create(customer)
  };

  // Update Customer
  async updateCustomer(customer, id) {
    return Customer.update(customer,{where:{id}})
  };

  // Delete Customer
  async deleteCustomer(id) {
    return Customer.destroy({where:{id}})
  };
};


let customerController = new CustomerController();

module.exports = customerController;