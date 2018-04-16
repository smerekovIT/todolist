import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesService } from './games.service';
import { AppRoutingModule } from './app-routing.module';
import { WishListComponent } from './wish-list/wish-list.component';


@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    WishListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
