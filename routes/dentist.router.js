const router = require('express').Router({mergeParams:true});
const appointmentRouter = require('./appointment.router');

const dentistController = require("../controllers/dentist.controller");

// RESOURCES

router.use('/:dentistId/appointments', appointmentRouter);

// ENDPOINTS

// GET ALL

router.get ('/', async (req,res) => {
    try{
        res.json(await dentistController.indexAll());
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
        res.json(await dentistController.findDentist(req.params.id));
    }catch(error){
        console.log(error);
        res.status(500).json({
            error: 'error',
            message: 'error'
        });
    };
});

// CREATE DENTIST

router.post('/', async (req,res) => {
    try{
      res.json(await dentistController.createDentist(req.body));
    }catch(error){
      console.log(error);
      res.status(500).json({
        error: 'error',
        message: 'error'
      });
    };
});

// UPDATE DENTIST

router.put('/:id', async (req,res) => {
    try{
      const body = req.body;
      res.json(await dentistController.updateDentist(body, req.params.id));
    }catch(error){
      console.log(error);
      res.status(500).json({
        error: 'error',
        message: 'error'
      });
    };
});

// DELATE DENTIST

router.delete('/:id', async (req,res) => {
  try{
    res.json(await dentistController.deleteDentist(req.params.id));
  }catch(error){
    console.log(error);
    res.status(500).json({
      error: 'error',
      message: 'error'
    });
  };
});

  

module.exports = router;