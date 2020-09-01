//the same routers controlling the use of express
const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');




router.get('/flights/:id/ticket/new' , ticketsCtrl.new)
router.post('/flights/:id/ticket' , ticketsCtrl.create)
// router.delete('/tickets/:id' , ticketsCtrl.delete)



module.exports = router;