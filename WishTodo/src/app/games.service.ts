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
   
   // localStorage.setItem('game', JSON.stringify(newGame))
    
    return of(newGame)
  }
  getListMyGame() {
    //let item = localStorage.getItem('game')
   // let a =  JSON.parse(item)
    //this.myGames.push(a)
    
    
    return of(this.myGames)
  }
  delete(id):any{
  //  localStorage.removeItem
  return of(this.myGames = this.myGames.filter(c => c.id !== id))
    
  }
  deleteAll(){
   return of( this.myGames = [])
  }
}
