var express = require('express');
var router = express.Router();
var addFlightsCtrl = require('../controllers/addflights');

router.post('/flights/:id/addflights', addFlightsCtrl.create);

module.exports = router;