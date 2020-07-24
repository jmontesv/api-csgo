const express = require('express');
const { HLTV } = require('hltv');
const router = express.Router();

router.get('/', async function (req, res) {
    const currentMonth = new Date().getMonth();
    const remainingMonths = currentMonth === 11 ? 12 : 11;
    const currentsEvents = await Promise.all(
        Array.from(Array(remainingMonths - currentMonth), (_, index) => {
            return HLTV.getEvents({ month: currentMonth + index })
        })
    );
    res.send({ currentsEvents });
});
router.get('/:id', async function (req, res) {
    const { id } = req.params;
    const eventInfo = await HLTV.getEvent({ id });
    res.send({ eventInfo });
});

module.exports = router;