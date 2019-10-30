import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { RoundComponent } from './components/round/round.component';

const APP_ROUTES: Routes = [
  { path: '', component: GameComponent },
  { path: 'round', component: RoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
