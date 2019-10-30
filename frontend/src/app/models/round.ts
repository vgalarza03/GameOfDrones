export class Round {

  constructor(_id = '', player1Move = '', player2Move = '', gameId = '') {
    this._id = _id;
    this.player1Move = player1Move;
    this.player2Move = player2Move;
    this.gameId = gameId;
  }

  _id: string;
  player1Move: string;
  player2Move: string;
  gameId: string;
}
