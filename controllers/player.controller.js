const { HLTV } = require("hltv");

const playerController = {};

playerController.getPlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const playerInfo = await HLTV.getPlayerStats({ id });
    res.status(200).json({ id: id, ...playerInfo });
  } catch (err) {
    res.status(400).json(err);
  }
};
module.exports = playerController;
