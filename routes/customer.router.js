const router = require('express').Router();
const dateRouter = require('./date.router');



// const customerController = require("#");

// RESOURCES

router.use('/:id/date', dateRouter);


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

module.exports = router;
