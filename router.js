const router = require('express').Router();
const customerRouter = require('./routes/customer.router');
const appointmentRouter = require('./routes/appointment.router');
const dentistRouter = require('./routes/dentist.router');

// REST RESOURCES

router.use('/customers',customerRouter);
router.use('/appointments', appointmentRouter);
router.use('/dentists', dentistRouter);


module.exports = router;