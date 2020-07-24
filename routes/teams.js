const express = require('express');
const { HLTV } = require('hltv');
const router = express.Router();

router.get('/ranking', async function (req, res) {
    const { id } = req.params;
    const teamInfo = await HLTV.getTeamRanking();
    res.send({ teamInfo });
});
router.get('/:id', async function (req, res) {
    const { id } = req.params;
    const teamInfo = await HLTV.getTeam({ id });
    res.send({ teamInfo });
});

module.exports = router;