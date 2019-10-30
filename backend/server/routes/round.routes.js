const express = require("express");
const router = express.Router();

const round = require("../controllers/round.controller");

router.get("/", round.getRounds);
router.post("/", round.addRound);

module.exports = router;
