import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GamesListComponent } from './games-list/games-list.component';
import { WishListComponent } from './wish-list/wish-list.component';

const appRoutes:Routes = [
    {path: '', redirectTo: '/list', pathMatch: 'full'},
    {path: 'list', component: GamesListComponent},
    {path: 'wish', component: WishListComponent}
]

@NgModule({
  
  imports: [
   RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }