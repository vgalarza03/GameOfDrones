const mongoose = require("mongoose");

const { Schema } = mongoose;

const GameSchema = new Schema({
  player1: { type: String, required: true },
  player2: { type: String, required: true },
  round: { type: Number, required: false }
});

module.exports = mongoose.model("Game", GameSchema);
