const { HLTV } = require("hltv");

const teamController = {};

teamController.getRanking = async (req, res) => {
  try {
    const teamsInfo = await HLTV.getTeamRanking();
    res.status(200).json(teamsInfo);
  } catch (err) {
    res.status(400).json(err.message);
  }
};
teamController.getTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const teamInfo = await HLTV.getTeam({ id });
    res.status(200).json({ teamInfo });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = teamController;
