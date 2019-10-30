const express = require("express");
const router = express.Router();

const game = require("../controllers/game.controller");

router.get("/", game.getGames);
router.post("/", game.addGame);
router.get("/:id", game.getGame);
router.put("/:id", game.editGame);

module.exports = router;
