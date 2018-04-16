import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Games } from './models/Games';
import { GAMES } from './games-mock';
@Injectable()
export class GamesService {
  games: Games[] = GAMES
  myGames: Games[] = []
  constructor() { }


  getListGames(): Observable<Games[]>{
    
    return of(this.games)
  }

  AddGames(newGame):Observable<Games> {
    this.myGames = [...this.myGames, newGame]
   
    
    this.saveTodoList()
    
    return of(newGame)
  }
  getListMyGame() {
    let item = JSON.parse(localStorage.getItem('game'))
    console.log(item)
    this.myGames = item
    
    
    return of(this.myGames)
  }
  delete(id):any{
    this.myGames = this.myGames.filter(c => c.id !== id)
    this.saveTodoList()
    return of(this.myGames)
    
  }
  deleteAll(){
    localStorage.removeItem('game')
   return of( this.myGames = [])
  }

  saveTodoList() {
    return localStorage.setItem('game', JSON.stringify(this.myGames))

  }
}
