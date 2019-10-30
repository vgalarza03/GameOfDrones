const mongoose = require("mongoose");

const { Schema } = mongoose;

const RoundSchema = new Schema({
  player1Move: { type: String, required: true },
  player2Move: { type: String, required: true },
  gameId: { type: String, required: true },
  winner: { type: String, required: false }
});

module.exports = mongoose.model("Round", RoundSchema);
