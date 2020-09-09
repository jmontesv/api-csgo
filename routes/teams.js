const express = require('express');
const { HLTV } = require('hltv');
const router = express.Router();

router.get('/ranking', async function (req, res) {
    const teamsInfo = await HLTV.getTeamRanking();
    const teamsWithMoreInfo = teamsInfo.map((team) => {
       return new Promise((resolve, reject) => {
            HLTV.getTeam({id: team.team.id})
                .then(({logo, players}) => {
                    const fullWithMoreInfo = {...team, logo, players};
                    resolve(fullWithMoreInfo);
               }).catch((err) => {
                    reject(err)
               });
        })
    });
    Promise.all(teamsWithMoreInfo)
    .then((teams) => {
        res.status(200).send({ ranking: teams });
    })
    .catch((err) => {res.status(400).send({error: err})})
}); 
router.get('/:id', async function (req, res) { 
    const { id } = req.params;
    const teamInfo = await HLTV.getTeam({ id });
    res.send({ teamInfo });
});

module.exports = router;