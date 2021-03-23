const {Dentist} = require('../models');
const bcrypt = require( 'bcryptjs' );
const jwt = require( 'jsonwebtoken' );
const secretWord = process.env.JWT_SECRET || 'sacamuelas'

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

    let dentistName = dentist.dentistName
    let dentistExist = await Dentist.findOne({where:{name:dentistName}})
    if(dentistExist) {
      return;
    }
    dentist.password = await bcrypt.hash(dentist.password, 5)
    return Dentist.create(dentist)
  };

  // CREATE LOGIN

  async login(name, password) {
    
    const dentist = await Dentist.findOne({where:{name}})

    if(!dentist) {
      throw new Error('Dentist does not exist')
    };

    if(!await bcrypt.compare(password, dentist.password)) {
      throw new Error('wrong password')
    };

    const payload = {

      dentistId: dentist.id,
      tokenCreationDate: new Date,
    };

    let token = jwt.sign(payload, secretWord);
    return {
      token,
      dentist
    }
  };

    // LOGOUT 

    async logOut(id) {
      return Dentist.findByPk(id);
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
