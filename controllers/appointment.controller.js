const {Appointment} = require('../models');

class AppointmentController {

  // Search All Appointments
  async indexAll() {
    return Appointment.findAll();
  };

  async createAppointment(customerId, dentistId, id) {
    return Appointment.create(customerId,dentistId,{where:{id}});  
  }

  // Find All Appointments by AppointmentId
  async findAppointment(id) {
    return Appointment.findById({where:{id}});
  };

  // Find One Appointment by CustomerId
  async findByCustomerId(customerId) {
    return Appointment.findById({where:{customerId}});
  };

  // Find One Appointment by DentistId
  async findByDentistId(dentistId) {
    return Appointment.findById({where:{dentistId}});
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
  async updateAppointment(customerId,dentistId,id) {
    return Appointment.update(customerId,dentistId,{where:{id}})
  }

  // Delete One Appointment by AppointmentId
  async deleteAppointment(id) {
    return Appointment.destroy({where:{id}})
  }
};


let appointmentController = new AppointmentController();

module.exports = appointmentController;
