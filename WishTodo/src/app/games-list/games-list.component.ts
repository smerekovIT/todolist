import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { GamesService } from '../games.service'
import { Games } from '../models/Games';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {
games$: Observable<Games[]>
  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService) { }

  ngOnInit() {
    this.getListGames()
  }

  getListGames() {
    this.games$ = this.gamesService.getListGames()
  }
  addGame(game){
    this.gamesService.AddGames(game).subscribe(data => console.log(data))
  }

}
