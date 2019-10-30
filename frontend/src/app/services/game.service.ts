import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  selectedGame: Game;
  games: Game[];
  readonly URL_API = 'http://localhost:8080/api/game';

  constructor(private http: HttpClient) {
    this.selectedGame = new Game();
  }

  getGame(_id: string) {
    return this.http.get(this.URL_API + `/${_id}`);
  }
  postGame(game: Game) {
    return this.http.post(this.URL_API, game);
  }
  putGame(game: Game) {
    return this.http.put(this.URL_API + `/${game._id}`, game);
  }
  deleteGame(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}
