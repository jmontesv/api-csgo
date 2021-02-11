const express = require("express");
const router = express.Router();
const teamController = require("../controllers/team.controller");

router.get("/ranking", teamController.getRanking);
router.get("/:id", teamController.getTeam);

module.exports = router;
