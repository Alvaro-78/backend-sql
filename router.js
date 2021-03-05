const router = require('express').Router();
const customerRouter = require('./routes/customer.router');
const appointmentRouter = require('./routes/appointment.router');
const dentistRouter = require('./routes/dentist.router');

// REST RESOURCES

router.use('/customer',customerRouter);
router.use('/appointment', appointmentRouter);
router.use('/dentist', dentistRouter);


module.exports = router;