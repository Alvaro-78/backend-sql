const {Appointment} = require('../models');

class AppointmentController {

  // Search All Appointments
  async indexAll(appointment) {
    return Appointment.findAll(appointment);
  };

  async createAppointment(customerId, dentistId, id) {
    return Appointment.create(customerId,dentistId,{where:{id}});  
  }

  // Find All Appointments by AppointmentId
  async findAppointment(appointment,id) {
    return Appointment.findOne(appointment,{where:{id}});
  };

  // Find One Appointment by CustomerId
  async findCustomer(customerId) {
    return Appointment.findOne({where:{customerId}});
  };

  // Find One Appointment by DentistId
  async findDentist(dentistId) {
    return Appointment.findOne({where:{dentistId}});
  };

  // // Update One Appointment by CustomerId
  // async updateCustomerId(customerId) {     
  //   return Appointment.update({where:{customerId}});
  // };

  // // Update One Appointment by DentistId
  // async updateDentistId(dentistId) {     
  //   return Appointment.update({where:{dentistId}});
  // };

  // Update One Appointment by Id
  async updateAppointment(appointment,id) {
    return Appointment.update(appointment,{where:{id}})
  }

  // Delete One Appointment by AppointmentId
  async deleteAppointment(id) {
    return Appointment.destroy({where:{id}})
  }
};


let appointmentController = new AppointmentController();

module.exports = appointmentController;
