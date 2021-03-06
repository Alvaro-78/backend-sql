const {Customer} = require('../models');
const bcrypt = require( 'bcryptjs' );
const jwt = require( 'jsonwebtoken' );
const secretWord = process.env.JWT_SECRET || 'sacamuelas'


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
    Customer.password = await bcrypt.hash(customer.password, 5)
    return Customer.create(customer)
  };

  // CREATE LOGIN

  async login( email,password ) {

    const user =  await Customer.findOne( { email } );

    if(!user){
      throw new Error( 'The email does not exist' )
    };

    if(!await bcrypt.compare( password, customer.password )) {
      throw new Error( 'Wrong password' )
    };

    const payload = {

      customerId: customer.id,
      tokenCreationDate: new Date,
    };
    return jwt.sign(payload, secretWord);
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