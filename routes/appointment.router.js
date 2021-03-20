const router = require('express').Router({mergeParams:true});
const appointmentController = require("../controllers/appointment.controller");

// RESOURCES


// ENDPOINTS

// GET ALL

router.get ('/', async (req,res) => {
  try{
      res.json(await appointmentController.indexAll());
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
    const client = req.params.customerId;
    const doctor = req.params.dentistId
    const responsePepe = res.json(await appointmentController.createAppointment(req.body, client, doctor));
    console.log("PEPEEEEEEEEE222222",responsePepe)
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
        res.json(await appointmentController.findAppointment(req.params.id));
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
      res.json(await appointmentController.updateAppointment(body,req.params.id));
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
      res.json(await appointmentController.deleteAppointment(req.params.id));
  }catch(error){
      console.log(error);
      res.status(500).json({
          error: 'error',
          message: 'error'
      });
  };
});



module.exports = router;

