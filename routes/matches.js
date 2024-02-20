const express = require("express");
const matchController = require("../controllers/match.controller");
const router = express.Router();

router.get("/", matchController.getMatches);
router.get("/:id", matchController.getMatch);
router.get("/matchStats/:id", matchController.getMatchStats);

module.exports = router;
    