const express = require('express');
const { HLTV } = require('hltv');
const router = express.Router();

router.get('/', async function (req, res) {
    const currentsEvents = await HLTV.getEvents();
    res.send({ currentsEvents });
});
router.get('/:id', async function (req, res) {
    const { id } = req.params;
    const eventInfo = await HLTV.getEvent({ id });
    res.send({ eventInfo });
});

module.exports = router;