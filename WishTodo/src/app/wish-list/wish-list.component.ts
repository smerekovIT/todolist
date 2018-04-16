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
  sum = 0
  constructor(
    private route: ActivatedRoute,
    private GamesService: GamesService
  ) { }

  ngOnInit() {
    this.getGame()
    
  }
  getGame() {
    
    this.games$ = this.GamesService.getListMyGame()
     this.games$.subscribe(data=> data.map((i)=> console.log(this.sum += i.price)))
     
  }
  
  onDelete(game){
    this.GamesService.delete(game.id).subscribe(() =>this.games$ = this.GamesService.getListMyGame())
    this.sum = this.sum - game.price
  }
  deleteAll(){
    this.GamesService.deleteAll().subscribe(()=> this.games$ = this.GamesService.getListMyGame())
    this.sum = 0
  }

}
