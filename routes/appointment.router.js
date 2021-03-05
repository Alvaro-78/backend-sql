const router = require('express').Router({mergeParams:true});


const appointmentController = require("../controllers/appointment.controller");

// RESOURCES


// ENDPOINTS

// GET ALL

router.get ('/', async (req,res) => {
  try{
    if(req.params.customerId) {
      res.json(await appointmentController.findByCustomerId(req.params.customerId))
    }else if(req.params.dentistId){
      res.json(await appointmentController.findByDentistId(req.params.dentistId))
    }else{
      res.json(await appointmentController.indexAll());
    };
  }catch(error){
    console.log(error);
    res.status(500).json({
      error: 'error',
      message: 'error'
    });
  };
});

// CREATE APPOINTMENT

router.post ('/', async (req,res) => {
  try{
    let payload = req.body;
    if(req.params.customerId) {
      payload.customerId = req.params.customerId
    }else if(req.params.dentistId){
      payload.dentistId = req.params.dentistId
    }
      res.json(await appointmentController.create(payload));
   
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
        res.json(await appointmentController.findById(req.params.id));
    }catch(error){
        console.log(error);
        res.status(500).json({
            error: 'error',
            message: 'error'
        });
    };
});

// UPDATE ID

router.put ('/:id', async (req,res) => {
  try{
    const body = req.body;
    if(req.params.customerId) {
      res.json(await appointmentController.updateCustomerId(req.params.customerId,body))
    }else if(req.params.dentistId){
      res.json(await appointmentController.updateDentistId(req.params.dentistId,body))
    }else{
      res.json(await appointmentController.updateAppointment(body));
    };
  }catch(error){
    console.log(error);
    res.status(500).json({
      error: 'error',
      message: 'error'
    });
  };
});

// DELETE APPOINTMENT by ID

router.delete('/:id', async (req,res) => {
  try{
      res.json(await appointmentController.deleteById(req.params.id));
  }catch(error){
      console.log(error);
      res.status(500).json({
          error: 'error',
          message: 'error'
      });
  };
});



module.exports = router;

