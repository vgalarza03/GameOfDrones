import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Round } from '../models/round';

@Injectable({
  providedIn: 'root'
})
export class RoundService {
  selectedRound: Round;
  rounds: Round[];
  readonly URL_API = 'http://localhost:8080/api/round';

  constructor(private http: HttpClient) {
    this.selectedRound = new Round();
  }

  postRound(round: { player1Move: string, player2Move: string, gameId: string }) {
    return this.http.post(this.URL_API, round);
  }
}
