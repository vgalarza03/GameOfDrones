import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoundService } from '../../services/round.service';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/game';

declare var M: any;
@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.css'],
  providers: [RoundService]
})

export class RoundComponent implements OnInit {

  player1Move: string;
  moveCount: number;
  roundCount: number;
  gameId: string;
  weHaveaWinner: boolean;
  winner: string;
  currentPlayer: string;
  currentMove: string;
  game: Game;
  roundHistory: any[] = [];

  constructor(public roundService: RoundService, private router: Router, private gameService: GameService) {
    this.gameId = this.getGameIdFromLocalSt();
    this.moveCount = 0;
    this.roundCount = 1;
    this.weHaveaWinner = false;
    this.obtainGame(this.gameId);
  }

  ngOnInit() { }

  getGameIdFromLocalSt() {
    const gameId = localStorage.getItem('gameId');
    return gameId;
  }
  saveMove(form: NgForm) {
    this.moveCount++;

    if (this.moveCount === 2) {

      this.roundService.postRound({ player1Move: this.player1Move, player2Move: this.currentMove, gameId: this.gameId })
        .subscribe((res: any) => {
          this.winner = this.returnWinnerName(res.winner);

          if (res.weHaveaWinner) {
            this.weHaveaWinner = true;
          } else {
            this.resetForm();
            M.toast({ html: 'Round ' + this.roundCount + ' Finalized' });
            this.roundCount++;
          }
        });

    } else {
      this.player1Move = this.currentMove;
      this.currentMove = 'none';
      this.currentPlayer = this.game.player2;
    }
  }
  addRound() {
    const roundToAdd = { round: this.roundCount, winner: this.winner };
    this.roundHistory.push(roundToAdd);
  }

  returnWinnerName(winner) {
    if (winner === 'player1') {
      return this.game.player1;
    } else {
      return this.game.player2;
    }
  }

  resetForm() {
    this.currentMove = 'none';
    this.moveCount = 0;
    this.currentPlayer = this.game.player1;
    this.addRound();
  }

  obtainGame(id: string) {
    this.gameService.getGame(id)
      .subscribe((res: any) => {
        this.game = res;
        this.currentPlayer = this.game.player1;
      });
  }

  resetGame() {
    this.router.navigate(['/']);
  }
}
