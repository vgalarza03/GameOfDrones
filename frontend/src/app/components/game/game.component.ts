import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GameService } from '../../services/game.service';

declare var M: any;
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [GameService]
})

export class GameComponent implements OnInit {

  constructor(public gameService: GameService, private router: Router) { }

  ngOnInit() { }

  addGame(form: NgForm) {
    this.gameService.postGame(form.value)
      .subscribe((res: any) => {
        this.addGameOnLocalStorage(res.gameId);
        M.toast({ html: 'Game Started!' });
        this.router.navigate(['/round']);
      });
  }

  addGameOnLocalStorage(gameId) {
    localStorage.setItem('gameId', gameId);
  }

  getErrorMessage() {
    return 'Please enter a value';
  }
}
