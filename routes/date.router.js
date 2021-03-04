const router = require('express').Router({mergeParams:true});


const dateController = require("../controllers/date.controller");

// RESOURCES


// ENDPOINTS

// GET ALL
router.get ('/', async (req,res) => {
  try{
    if(req.params.customerId) {
      res.json(await dateController.findByCustomerId(req.params.customerId))
    }else if(req.params.dentistId){
      res.json(await dateController.findByDentistId(req.params.dentistId))
    }else{
      res.json(await dateController.indexAll());
    };
  }catch(error){
    console.log(error);
    res.status(500).json({
      error: 'error',
      message: 'error'
    });
  };
});

router.post ('/', async (req,res) => {
  try{
    let payload = req.body;
    if(req.params.customerId) {
      payload.customerID = req.params.customerId
    }else if(req.params.dentistId){
      payload.dentistID = req.params.dentistId
    }
      res.json(await dateController.create(payload));
   
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
        res.json(await dateController.findById(req.params.id));
    }catch(error){
        console.log(error);
        res.status(500).json({
            error: 'error',
            message: 'error'
        });
    };
});


module.exports = router;

