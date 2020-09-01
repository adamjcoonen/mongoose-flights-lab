
//the same routers controlling the use of express
var express = require('express');
var router = express.Router();
// new controller to attach controllers data to controllers JS
const destinationsCtrl = require('../controllers/destinations');




router.post('/flights/:id/destinations', destinationsCtrl.create)


module.exports = router;