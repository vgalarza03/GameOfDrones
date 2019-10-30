export class Game {

  constructor(_id = '', player1 = '', player2 = '', round = 0, currentPlayer = '') {
    this._id = _id;
    this.player1 = player1;
    this.player2 = player2;
    this.currentPlayer = currentPlayer;
    this.round = round;
  }

  _id: string;
  player1: string;
  player2: string;
  currentPlayer: string;
  round: number;
}
