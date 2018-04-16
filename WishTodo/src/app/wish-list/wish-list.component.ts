import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'

import { GamesService } from '../games.service'
import { Games } from '../models/Games';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  games$: Observable<Games[]>
  constructor(
    private route: ActivatedRoute,
    private GamesService: GamesService
  ) { }

  ngOnInit() {
    this.getGame()
    this.sum()
  }
  getGame() {
    this.games$ = this.GamesService.getListMyGame()
  }
  onDelete(id){
    this.GamesService.delete(id).subscribe(() =>this.games$ = this.GamesService.getListMyGame())
  }
  deleteAll(){
    this.GamesService.deleteAll().subscribe(()=> this.games$ = this.GamesService.getListMyGame())
  }

}
