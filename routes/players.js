const express = require('express');
const { HLTV } = require('hltv');
const router = express.Router();

router.get('/:id', async function (req, res) {
    const { id } = req.params;
    const playerInfo = await HLTV.getPlayerStats({ id });
    res.send({ playerInfo });
});

module.exports = router;