const { HLTV } = require("hltv");
const formatters = require("../lib/formatters");

const matchController = {};

matchController.getMatches = async (req, res) => {
  try {
    const matches = await HLTV.getMatches();
    const matchesGrouped = formatters.groupMatches(matches);
    res.status(200).json(matchesGrouped);
  } catch (err) {
    res.status(400).json(err);
  }
};
matchController.getMatch = async (req, res) => {
  try {
    const { id } = req.params;
    const match = await HLTV.getMatch({ id });
    res.status(200).json(match);
  } catch (err) {
    res
      .status(400)
      .json({ success: false, code: err.code, message: err.message });
  }
};
matchController.getMatchStats = async (req, res) => {
  try {
    const { id } = req.params;
    const matchStats = await HLTV.getMatchStats({ id });
    res.status(200).json(matchStats);
  } catch (err) {
    res.status(400).json(err);
   }
};

module.exports = matchController;
