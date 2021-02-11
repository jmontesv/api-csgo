const express = require("express");
const players = require("./players");
const teams = require("./teams");
const events = require("./events");
const matches = require("./matches");

const router = express.Router();

router.use("/players", players);
router.use("/teams", teams);
router.use("/events", events);
router.use("/matches", matches);

module.exports = router;
