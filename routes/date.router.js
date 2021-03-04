const router = require('express').Router();
const dentistRouter = require('./dentist.router');
const customerRouter = require('./customer.router');


// const dateController = require("#");

// RESOURCES

router.use('/:id/customer', customerRouter);
router.use('/:id/dentist', dentistRouter);

// ENDPOINTS

// GET ALL
router.get ('/', async (req,res) => {
    try{
        res.json(await dateController.indexAll());
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