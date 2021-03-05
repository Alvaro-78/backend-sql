const router = require('express').Router({mergeParams:true});
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
    res.json(await customerController.findCustomer(req.params.id));
  }catch(error){
    console.log(error);
    res.status(500).json({
      error: 'error',
      message: 'error'
    });
  };
});

// CREATE CUSTOMER

router.post('/', async (req,res) => {
  try{
    res.json(await customerController.createCustomer(req.body));
  }catch(error){
    console.log(error);
    res.status(500).json({
      error: 'error',
      message: 'error'
    });
  };
});

// UPDATE CUSTOMER

router.put('/:id', async (req,res) => {
  try{
    const body = req.body;
    res.json(await customerController.updateCustomer(body, req.params.id));
  }catch(error){
    console.log(error);
    res.status(500).json({
      error: 'error',
      message: 'error'
    });
  };
});

// DELETE CUSTOMER

router.delete('/:id', async (req,res) => {
  try{
    res.json(await customerController.deleteCustomer(req.params.id));
  }catch(error){
    console.log(error);
    res.status(500).json({
      error: 'error',
      message: 'error'
    });
  };
});



module.exports = router;
