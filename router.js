const router = require('express').Router();
const customerRouter = require('./routes/customer.router');
const dateRouter = require('./routes/date.router');
const dentistRouter = require('./routes/dentist.router');

// REST RESOURCES

router.use('/customer',customerRouter);
router.use('/date', dateRouter);
router.use('/dentist', dentistRouter);


module.exports = router;