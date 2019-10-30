const Game = require("../models/game");

const gameController = {};

gameController.getGames = async (req, res) => {
  const games = await Game.find();
  res.json(games);
};

gameController.getGame = async (req, res) => {
  const game = await Game.findById(req.params.id);
  res.json(game);
};

gameController.editGame = async (req, res) => {
  const { id } = req.params;
  const game = {
    name: req.body.name,
    wins: req.body.wins,
    turn: req.body.turn
  };

  await Game.findByIdAndUpdate(id, { $set: game }, { new: true });

  res.json({
    status: "Game updated"
  });
};

gameController.addGame = async (req, res) => {
  const game = new Game(req.body);
  await game.save();
  res.json({
    gameId: game._id
  });
};

module.exports = gameController;
