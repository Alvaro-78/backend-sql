const router = require('express').Router();
const appointmentRouter = require('./appointment.router');



const customerController = require("../controllers/customer.controller");

// RESOURCES

router.use('/:customerId/appointments', appointmentRouter);


// ENDPOINTS

// GET ALL

router.get ('/', async (req,res) => {
  try{
    res.json(await customerController.indexAll());
  }catch(error){
    console.log(error);
    res.status(500).json({
      error: 'error',
      message: 'error'
    });
  };
});

// GET BY ID

router.get('/:id', async (req,res) => {
  try{
    res.json(await customerController.findById(req.params.id));
  }catch(error){
    console.log(error);
    res.status(500).json({
      error: 'error',
      message: 'error'
    });
  };
});

router.post('/:id/appointments', async (req,res) => {
  try{
    res.json(await appointmentController.findById(req.params.id));
  }catch(error){
    console.log(error);
    res.status(500).json({
      error: 'error',
      message: 'error'
    });
  };
});

module.exports = router;
