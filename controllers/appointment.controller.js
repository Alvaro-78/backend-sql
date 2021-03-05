const {Appointment} = require('../models');

class AppointmentController {

  // Search All Appointments
  async indexAll() {
    return Appointment.findAll();
  };

  // Find All Appointments by AppointmentId
  async findById(id) {
    return Appointment.findOne({where:{id}});
  };

  // Find One Appointment by CustomerId
  async findByCustomerId(customerId) {
    return Appointment.find({where:{customerId}});
  };

  // Find One Appointment by DentistId
  async findByDentistId(dentistId) {
    return Appointment.find({where:{dentistId}});
  };

  // Update One Appointment by CustomerId
  async updateCustomerId(customerId) {     
    return Appointment.update({where:{customerId}});
  };

  // Update One Appointment by DentistId
  async updateDentistId(dentistId) {     
    return Appointment.update({where:{dentistId}});
  };

  // Update One Appointment by Id
  async updateAppointment(id) {
    return Appointment.update({where:{id}})
  }

  // Delete One Appointment by AppointmentId
  async deleteById(id) {
    return Appointment.deleteById({where:{id}})
  }
};


let appointmentController = new AppointmentController();

module.exports = appointmentController;
