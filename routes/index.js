const express = require('express');
const players = require('./players');
const teams = require('./teams');
const events = require('./events');
const router =  express.Router();


router.use('/players', players);
router.use('/teams', teams);
router.use('/events', events);

module.exports = router;