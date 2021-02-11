const express = require("express");
const playerController = require("../controllers/player.controller");
const router = express.Router();

router.get("/:id", playerController.getPlayer);

module.exports = router;
