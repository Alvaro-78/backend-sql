const {Appointment} = require('../models');

class AppointmentController {

  async indexAll() {
    return Appointment.findAll();
  };

  async findById(id) {
    return Appointment.findOne({where:{id}});
  };

  async findById(id) {
    return Appointment.findOne({where:{id}});
  };

  async findByCustomerId(customerId) {
    return Appointment.find({where:{customerId}});
  };

  async findByDentistId(dentistId) {
    return Appointment.find({where:{dentistId}});
  };

};


let appointmentController = new AppointmentController();

module.exports = appointmentController;
