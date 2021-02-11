const { HLTV } = require("hltv");

const eventController = {};

eventController.getEvents = async (req, res) => {
  try {
    const currentsEvents = await HLTV.getEvents();
    res.json(currentsEvents);
  } catch (e) {
    res.status(400).send(e);
  }
};
eventController.getEvent = async function (req, res) {
  try {
    const { id } = req.params;
    const eventInfo = await HLTV.getEvent({ id });
    res.send({ eventInfo });
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = eventController;
