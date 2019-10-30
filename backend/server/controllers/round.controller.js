const Round = require("../models/round");

const roundController = {};

roundController.getRounds = async (req, res) => {
  const rounds = await Round.find();
  res.json(rounds);
};

roundController.getRound = async (req, res) => {
  const round = await Round.findById(req.params.id);
  res.json(round);
};

isAWinner = async (req, res) => {
  const round = await Round.find({ gameId: req.gameId, winner: req.player });
  return round.length;
};

roundController.addRound = async (req, res) => {
  const round = new Round(req.body);

  let winner = checkWinner(round.player1Move, round.player2Move);

  round.winner = winner;
  await round.save();

  var win = isAWinner({ gameId: round.gameId, player: round.winner }).then(
    cantRounds => {
      console.log("cantRounds" + cantRounds);

      if (cantRounds >= 3) {
        res.json({
          weHaveaWinner: true,
          winner: round.winner
        });
      } else {
        res.json({
          weHaveaWinner: false,
          winner: round.winner
        });
      }
    }
  );
};

checkWinner = (move1, move2) => {
  if (
    (move1 === "rock" && move2 === "scissors") ||
    (move1 === "scissors" && move2 === "paper") ||
    (move1 === "paper" && move2 === "rock")
  ) {
    return "player1";
  }
  if (
    (move2 === "rock" && move1 === "scissors") ||
    (move2 === "scissors" && move1 === "paper") ||
    (move2 === "paper" && move1 === "rock")
  ) {
    return "player2";
  }
};

module.exports = roundController;
