let express = require('express');
let router = express.Router();
const flightsCtrl = require('../controllers/flights');






//get the flight index 
router.get('/', flightsCtrl.index)
/* GET flights listing. */
router.get('/new', flightsCtrl.new);
//get the add flights route
router.post('/', flightsCtrl.create)
//this creates a delete button for each flight
router.delete('/:id', flightsCtrl.delete);
//edit the individual flight data   
router.get('/:id/edit', flightsCtrl.edit)
// this is the route to update the IDs
router.put('/:id', flightsCtrl.update);

router.get('/:id', flightsCtrl.show)








module.exports = router;
